/**
 * API handler for creating a Stripe checkout session
 * This would be deployed as a serverless function
 */
export const createCheckoutSession = async (req: any, res: any) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { priceId, mode = "subscription" } = req.body;

    if (!priceId) {
      return res.status(400).json({ error: "Price ID is required" });
    }

    // Initialize Stripe
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode,
      success_url: `${req.headers.origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/payment-cancelled`,
      metadata: {
        payment_link_id: priceId,
      },
    });

    return res.status(200).json({ sessionId: session.id });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    return res.status(500).json({ error: error.message });
  }
};
