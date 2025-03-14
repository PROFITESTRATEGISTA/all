// Serverless function for handling Stripe webhook events
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const { createClient } = require("@supabase/supabase-js");

  // Initialize Supabase client
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
  );

  // Get the signature from the headers
  const signature = req.headers["stripe-signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  // Verify the webhook signature
  try {
    event = stripe.webhooks.constructEvent(req.body, signature, webhookSecret);
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Skip if payment was not successful
    if (session.payment_status !== "paid") {
      return res
        .status(200)
        .json({ received: true, status: "payment not completed" });
    }

    const email = session.customer_email;
    const paymentLinkId = session.metadata?.payment_link_id;
    const customerId = session.customer;

    if (!email || !paymentLinkId) {
      return res.status(400).json({ error: "Missing required data" });
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

      // Map of payment links to product types
      const PAYMENT_LINKS = {
        "https://buy.stripe.com/6oE3cY5pF5Fq5pKcN3": "PRO",
        "https://buy.stripe.com/5kA6rG4pF3Fq5pK9AC": "Starter",
        "https://buy.stripe.com/cN24jT8rq4QR7Qs6oF": "Global",
        "https://buy.stripe.com/8wM5nQ4pF6Yp3G8dQW": "Free",
        "https://buy.stripe.com/00g4jI4pF7Yp3G8wA": "Robô GR PRO",
        "https://profitestrategista.rds.land": "Plataforma Tridar Copy Trading",
        "https://wa.me/5511999999999": "Máquina VPS Trader",
      };

      // Determine if this is a pack or optional product
      const productName = PAYMENT_LINKS[paymentLinkId];
      const isPack = ["PRO", "Starter", "Global", "Free"].includes(productName);

      if (!productName) {
        return res.status(400).json({ error: "Invalid payment link ID" });
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
                stripe_customer_id: customerId,
              })
              .eq("user_id", userId);

            if (error) throw error;

            // Record the payment event
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

            return res.status(200).json({
              received: true,
              status: "success",
              message: `Membership updated to ${productName}`,
            });
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

              // Record the payment event
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

              return res.status(200).json({
                received: true,
                status: "success",
                message: `Added ${productName} to membership`,
              });
            }
            return res.status(200).json({
              received: true,
              status: "success",
              message: `${productName} is already included in membership`,
            });
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
            stripe_customer_id: customerId,
          };

          const { error } = await supabase
            .from("memberships")
            .insert([newMembership]);

          if (error) throw error;

          // Record the payment event
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

          return res.status(200).json({
            received: true,
            status: "success",
            message: isPack
              ? `New membership created with ${productName} pack`
              : `New membership created with ${productName} optional`,
          });
        }
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

        return res.status(200).json({
          received: true,
          status: "pending",
          message:
            "User not found. Payment recorded but waiting for user registration.",
        });
      }
    } catch (error) {
      console.error("Error processing webhook:", error);
      return res
        .status(500)
        .json({ error: "Failed to process webhook", details: error.message });
    }
  }

  // Return a response to acknowledge receipt of the event
  return res.status(200).json({ received: true });
}
