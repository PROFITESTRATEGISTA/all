// Types for membership system

export interface Membership {
  id: string;
  user_id: string;
  pack: string | null;
  optionals: string[];
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Pack {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  payment_link_id: string;
}

export interface OptionalProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  payment_link_id: string;
  category: string;
}

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

// Access rules for each pack
export const PACK_ACCESS = {
  PRO: {
    // PRO has access to everything except optionals
    includedFeatures: [
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
      "Pivot Hunter",
      "Trap Hunter",
      "Elephant Hunter",
      "Esto Hunter",
      "Setup 9.1/9.2",
      "Robô GR Starter",
      "Robô GR Global",
      "Criptomoedas",
      "Ações e Futuros",
    ],
    excludedFeatures: [
      "Robô GR PRO",
      "Plataforma Tridar Copy Trading",
      "Máquina VPS Trader",
    ],
  },
  Starter: {
    // Starter has access to Pack Starter and Pack Trader robots only
    includedFeatures: [
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
    ],
    excludedFeatures: [
      "Plataforma Tridar Copy Trading",
      "Criptomoedas",
      "Global",
      "GR Global",
      "Ações e Futuros",
      "Robô GR PRO",
      "Máquina VPS Trader",
    ],
  },
  Global: {
    // Global has access to 3 specific robots
    includedFeatures: ["Criptomoedas", "Global", "GR Global"],
    excludedFeatures: [
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
      "Pivot Hunter",
      "Trap Hunter",
      "Elephant Hunter",
      "Esto Hunter",
      "Setup 9.1/9.2",
      "Robô GR Starter",
      "Robô GR PRO",
      "Plataforma Tridar Copy Trading",
      "Máquina VPS Trader",
    ],
  },
};
