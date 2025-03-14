import { supabase } from "./supabase";
import { PAYMENT_LINKS } from "./stripe";

/**
 * Handles payment processing and user membership management
 * @param email User's email address
 * @param paymentLinkId The Stripe payment link ID used for the purchase
 * @returns Result of the operation
 */
import { PaymentResult, PaymentEvent, MembershipUpdate } from "@/types/payment";

export const handlePayment = async (
  email: string,
  paymentLinkId: string,
): Promise<PaymentResult> => {
  try {
    // Get user by email
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (userError && userError.code !== "PGRST116") {
      throw userError;
    }

    const userId = userData?.id;

    // Determine if this is a pack or optional product
    const productName =
      PAYMENT_LINKS[paymentLinkId as keyof typeof PAYMENT_LINKS];
    const isPack = Object.keys(PAYMENT_LINKS)
      .filter(
        (key) =>
          key.includes("PACK") ||
          key === "https://buy.stripe.com/6oE3cY5pF5Fq5pKcN3" ||
          key === "https://buy.stripe.com/5kA6rG4pF3Fq5pK9AC" ||
          key === "https://buy.stripe.com/cN24jT8rq4QR7Qs6oF" ||
          key === "https://buy.stripe.com/8wM5nQ4pF6Yp3G8dQW",
      )
      .includes(paymentLinkId);

    if (!productName) {
      return {
        status: "error",
        message: "Invalid payment link ID",
      } as PaymentResult;
    }

    if (userId) {
      // User exists - check if they have a membership
      const { data: membershipData, error: membershipError } = await supabase
        .from("memberships")
        .select("*")
        .eq("user_id", userId)
        .single();

      if (membershipError && membershipError.code !== "PGRST116") {
        throw membershipError;
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
            })
            .eq("user_id", userId);

          if (error) throw error;
          // Record the payment event
          await recordPaymentEvent({
            user_id: userId,
            email,
            payment_link_id: paymentLinkId,
            product_name: productName,
            status: "completed",
          });

          return {
            status: "success",
            message: `Membership updated to ${productName}`,
          } as PaymentResult;
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
              })
              .eq("user_id", userId);

            if (error) throw error;
            // Record the payment event
            await recordPaymentEvent({
              user_id: userId,
              email,
              payment_link_id: paymentLinkId,
              product_name: productName,
              status: "completed",
            });

            return {
              status: "success",
              message: `Added ${productName} to membership`,
            } as PaymentResult;
          }
          return {
            status: "success",
            message: `${productName} is already included in your membership`,
          } as PaymentResult;
        }
      } else {
        // Create new membership for existing user
        const newMembership = {
          user_id: userId,
          pack: isPack ? productName : null,
          optionals: isPack ? [] : [productName],
          active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase
          .from("memberships")
          .insert([newMembership]);

        if (error) throw error;
        // Record the payment event
        await recordPaymentEvent({
          user_id: userId,
          email,
          payment_link_id: paymentLinkId,
          product_name: productName,
          status: "completed",
        });

        return {
          status: "success",
          message: isPack
            ? `New membership created with ${productName} pack`
            : `New membership created with ${productName} optional`,
        } as PaymentResult;
      }
    } else {
      // User doesn't exist yet - this would typically be handled during signup
      // Record the pending payment event
      await recordPaymentEvent({
        email,
        payment_link_id: paymentLinkId,
        product_name: productName,
        status: "pending",
      });

      return {
        status: "pending",
        message:
          "User not found. Payment recorded but waiting for user registration.",
      } as PaymentResult;
    }
  } catch (error) {
    console.error("Error processing payment:", error);
    return {
      status: "error",
      message: "Failed to process payment",
    } as PaymentResult;
  }
};

/**
 * Checks if a user has access to a specific feature based on their membership
 * @param userId User ID
 * @param feature Feature name to check access for
 * @returns Boolean indicating if user has access
 */
/**
 * Records a payment event in the database
 * @param event Payment event details
 */
const recordPaymentEvent = async (event: PaymentEvent): Promise<void> => {
  try {
    await supabase.from("payment_events").insert([
      {
        ...event,
        created_at: new Date().toISOString(),
      },
    ]);
  } catch (error) {
    console.error("Error recording payment event:", error);
  }
};

/**
 * Checks if a user has access to a specific feature based on their membership
 * @param userId User ID
 * @param feature Feature name to check access for
 * @returns Boolean indicating if user has access
 */
export const checkFeatureAccess = async (
  userId: string,
  feature: string,
): Promise<boolean> => {
  try {
    // For development environment, use mock data based on localStorage
    if (import.meta.env.DEV) {
      const testUserPack =
        localStorage.getItem("testUserPack") || "Pack PRO Quant";

      // Check pack-based access
      if (testUserPack === "Pack PRO Quant") {
        // PRO has access to everything except optionals
        const isOptional = [
          "Robô GR PRO",
          "Plataforma Tridar Copy Trading",
          "Máquina VPS Trader",
        ].includes(feature);

        // For testing, let's say the user has GR Pro 25 as an optional
        if (isOptional && feature === "Robô GR PRO") return true;
        if (!isOptional) return true;
      }

      if (testUserPack === "Pack Starter") {
        // Starter has access to Pack Starter and Pack Trader robots only
        const starterAndTraderFeatures = [
          // Pack Starter robots
          "Trend 3",
          "Trend 2",
          "Take 40",
          "V Rev",
          "Location 1",
          "Take GO",
          "T20 BITFUT",
          "Flag 14",
          "Esto R",
          "Esto T",
          "Take 33",
          "CB BITFUT",
          "T200 BITFUT",
          "CB WIN",
          // Pack Trader robots (now part of Starter)
          "Pivot Hunter",
          "Trap Hunter",
          "Elephant Hunter",
          "Esto Hunter",
          "Setup 9.1/9.2",
          "Robô GR Starter",
        ];

        if (starterAndTraderFeatures.includes(feature)) return true;

        // Basic features all plans have
        const basicFeatures = ["Profit Pro", "Assessoria BTG Investimentos"];
        if (basicFeatures.includes(feature)) return true;

        // Explicitly deny access to Pack Global features
        const globalFeatures = [
          "Criptomoedas",
          "Global",
          "GR Global",
          "Ações e Futuros",
        ];
        if (globalFeatures.includes(feature)) return false;

        return false;
      }

      if (testUserPack === "Pack Global") {
        // Global has access to 3 specific robots
        const hasAccess = ["Criptomoedas", "Global", "GR Global"].includes(
          feature,
        );

        // Also include basic features that all plans have
        const basicFeatures = ["Profit Pro", "Assessoria BTG Investimentos"];
        if (hasAccess || basicFeatures.includes(feature)) return true;
      }

      return false;
    }

    // Real implementation for production
    const { data: membership, error } = await supabase
      .from("memberships")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error) return false;
    if (!membership || !membership.active) return false;

    // Check pack-based access
    if (membership.pack === "Pack PRO Quant" || membership.pack === "PRO") {
      // PRO has access to everything except optionals
      const isOptional = [
        "Robô GR PRO",
        "Plataforma Tridar Copy Trading",
        "Máquina VPS Trader",
      ].includes(feature);

      if (!isOptional) return true;
    }

    if (membership.pack === "Pack Starter" || membership.pack === "Starter") {
      // Starter has access to Pack Starter and Pack Trader robots only
      const starterAndTraderFeatures = [
        // Pack Starter robots
        "Trend 3",
        "Trend 2",
        "Take 40",
        "V Rev",
        "Location 1",
        "Take GO",
        "T20 BITFUT",
        "Flag 14",
        "Esto R",
        "Esto T",
        "Take 33",
        "CB BITFUT",
        "T200 BITFUT",
        "CB WIN",
        // Pack Trader robots (now part of Starter)
        "Pivot Hunter",
        "Trap Hunter",
        "Elephant Hunter",
        "Esto Hunter",
        "Setup 9.1/9.2",
        "Robô GR Starter",
      ];

      // Basic features all plans have
      const basicFeatures = ["Profit Pro", "Assessoria BTG Investimentos"];

      // Explicitly deny access to Pack Global features
      const globalFeatures = [
        "Criptomoedas",
        "Global",
        "GR Global",
        "Ações e Futuros",
      ];
      if (globalFeatures.includes(feature)) return false;

      if (
        starterAndTraderFeatures.includes(feature) ||
        basicFeatures.includes(feature)
      ) {
        return true;
      }
    }

    if (membership.pack === "Pack Global" || membership.pack === "Global") {
      // Global has access to 3 specific robots
      const hasAccess = ["Criptomoedas", "Global", "GR Global"].includes(
        feature,
      );

      if (hasAccess) return true;
    }

    // Check if user has the feature as an optional
    return membership.optionals.includes(feature);
  } catch (error) {
    console.error("Error checking feature access:", error);
    return false;
  }
};
