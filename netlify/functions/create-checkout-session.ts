import { Handler } from "@netlify/functions";
import Stripe from "stripe";

/**
 * Netlify serverless function to create a Stripe checkout session
 */
export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { priceId, mode = "subscription" } = JSON.parse(event.body || "{}");

    if (!priceId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Price ID is required" }),
      };
    }

    // Initialize Stripe
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: mode as "subscription" | "payment",
      success_url: `${event.headers.origin || event.headers.host}/payment-success?session_id={CHECKOUT_SESSION_ID}&payment_link_id=${priceId}`,
      cancel_url: `${event.headers.origin || event.headers.host}/payment-cancelled`,
      metadata: {
        payment_link_id: priceId,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
