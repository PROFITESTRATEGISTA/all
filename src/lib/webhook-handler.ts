import { supabase } from "./supabase";
import { PAYMENT_LINKS } from "../types/membership";

// This file would be used on the server side to handle Stripe webhooks
// For client-side demo purposes, we're including it here

interface WebhookPayload {
  type: string;
  data: {
    object: {
      customer_email: string;
      metadata: {
        payment_link_id: string;
      };
      customer: string;
      status: string;
    };
  };
}

export const handleWebhook = async (payload: WebhookPayload) => {
  // Only process successful checkout sessions
  if (
    payload.type !== "checkout.session.completed" ||
    payload.data.object.status !== "complete"
  ) {
    return { status: "ignored", message: "Not a completed checkout session" };
  }

  const email = payload.data.object.customer_email;
  const paymentLinkId = payload.data.object.metadata.payment_link_id;
  const customerId = payload.data.object.customer;

  if (!email || !paymentLinkId) {
    return { status: "error", message: "Missing required data" };
  }

  try {
    // Find user by email
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (userError) {
      return { status: "error", message: "User not found" };
    }

    const userId = userData.id;

    // Check if user already has a membership
    const { data: membershipData, error: membershipError } = await supabase
      .from("memberships")
      .select("*")
      .eq("user_id", userId)
      .single();

    // Determine if this is a pack or optional product
    const productName =
      PAYMENT_LINKS[paymentLinkId as keyof typeof PAYMENT_LINKS];
    const isPack = Object.keys(PAYMENT_LINKS)
      .filter((key) => key.includes("PACK"))
      .includes(paymentLinkId);

    if (!productName) {
      return { status: "error", message: "Invalid payment link ID" };
    }

    if (membershipData) {
      // User already has a membership - update it
      if (isPack) {
        // Update pack
        const { error } = await supabase
          .from("memberships")
          .update({
            pack: productName,
            updated_at: new Date().toISOString(),
            active: true,
            stripe_customer_id: customerId,
          })
          .eq("user_id", userId);

        if (error) throw error;
        return {
          status: "success",
          message: `Membership updated to ${productName}`,
        };
      } else {
        // Add optional product if not already included
        const optionals = membershipData.optionals || [];
        if (!optionals.includes(productName)) {
          optionals.push(productName);

          const { error } = await supabase
            .from("memberships")
            .update({
              optionals,
              updated_at: new Date().toISOString(),
              stripe_customer_id: customerId,
            })
            .eq("user_id", userId);

          if (error) throw error;
          return {
            status: "success",
            message: `Added ${productName} to membership`,
          };
        }
        return {
          status: "success",
          message: `${productName} is already included in membership`,
        };
      }
    } else {
      // Create new membership
      const newMembership = {
        user_id: userId,
        pack: isPack ? productName : null,
        optionals: isPack ? [] : [productName],
        active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        stripe_customer_id: customerId,
      };

      const { error } = await supabase
        .from("memberships")
        .insert([newMembership]);

      if (error) throw error;
      return {
        status: "success",
        message: isPack
          ? `New membership created with ${productName} pack`
          : `New membership created with ${productName} optional`,
      };
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    return { status: "error", message: "Failed to process webhook" };
  }
};
