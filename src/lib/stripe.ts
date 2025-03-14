// Simple payment links without Stripe integration

// Map of payment links to product types
export const PAYMENT_LINKS = {
  // Packs
  "https://buy.stripe.com/6oE3cY5pF5Fq5pKcN3": "PRO",
  "https://buy.stripe.com/5kA6rG4pF3Fq5pK9AC": "Starter",
  "https://buy.stripe.com/cN24jT8rq4QR7Qs6oF": "Global",
  "https://buy.stripe.com/8wM5nQ4pF6Yp3G8dQW": "Free",

  // Optional products
  "https://buy.stripe.com/00g4jI4pF7Yp3G8wA": "Robô GR PRO",
  "https://profitestrategista.rds.land": "Plataforma Tridar Copy Trading",
  "https://wa.me/5511999999999": "Máquina VPS Trader",
};

// Simple redirect to payment link
export const redirectToPaymentLink = (url: string) => {
  window.open(url, "_blank");
};
