import { Handler } from "@netlify/functions";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { PAYMENT_LINKS } from "../../src/types/membership";

/**
 * Netlify serverless function to handle Stripe webhooks
 */
export const handler: Handler = async (event, context) => {
  // Get the signature from the headers
  const signature = event.headers["stripe-signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

  // Initialize Supabase client
  const supabase = createClient(
    process.env.VITE_SUPABASE_URL || "",
    process.env.VITE_SUPABASE_ANON_KEY || "",
  );

  let statusCode = 200;
  let responseBody = {};

  try {
    let stripeEvent;
    // Verify the webhook signature
    try {
      stripeEvent = stripe.webhooks.constructEvent(
        event.body || "",
        signature || "",
        webhookSecret || "",
      );
    } catch (err: any) {
      console.error(`Webhook signature verification failed: ${err.message}`);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: `Webhook Error: ${err.message}` }),
      };
    }

    // Handle the event
    if (stripeEvent.type === "checkout.session.completed") {
      const session = stripeEvent.data.object;

      // Skip if payment was not successful
      if (session.payment_status !== "paid") {
        return {
          statusCode: 200,
          body: JSON.stringify({
            received: true,
            status: "payment not completed",
          }),
        };
      }

      const email = session.customer_email;
      const paymentLinkId = session.metadata?.payment_link_id;
      const customerId = session.customer;

      if (!email || !paymentLinkId) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: "Missing required data" }),
        };
      }

      try {
        // Find user by email
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
            statusCode: 400,
            body: JSON.stringify({ error: "Invalid payment link ID" }),
          };
        }

        if (userId) {
          // Process user membership updates
          // This is simplified - in production you would implement the full logic
          await supabase.from("payment_events").insert([
            {
              user_id: userId,
              email,
              payment_link_id: paymentLinkId,
              product_name: productName,
              status: "completed",
              stripe_session_id: session.id,
              stripe_customer_id: customerId,
              created_at: new Date().toISOString(),
            },
          ]);

          return {
            statusCode: 200,
            body: JSON.stringify({
              received: true,
              status: "success",
              message: `Payment processed successfully for ${productName}`,
            }),
          };
        } else {
          // User doesn't exist yet - record the pending payment event
          await supabase.from("payment_events").insert([
            {
              email,
              payment_link_id: paymentLinkId,
              product_name: productName,
              status: "pending",
              stripe_session_id: session.id,
              stripe_customer_id: customerId,
              created_at: new Date().toISOString(),
            },
          ]);

          return {
            statusCode: 200,
            body: JSON.stringify({
              received: true,
              status: "pending",
              message:
                "User not found. Payment recorded but waiting for user registration.",
            }),
          };
        }
      } catch (error: any) {
        console.error("Error processing webhook:", error);
        return {
          statusCode: 500,
          body: JSON.stringify({
            error: "Failed to process webhook",
            details: error.message,
          }),
        };
      }
    }

    // Return a response to acknowledge receipt of the event
    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (error: any) {
    console.error("Unhandled error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Unhandled error",
        message: error.message,
      }),
    };
  }
};
