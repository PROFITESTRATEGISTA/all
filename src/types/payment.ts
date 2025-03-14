// Types for payment processing

export interface PaymentResult {
  status: "success" | "error" | "pending" | "ignored";
  message: string;
  data?: any;
}

export interface PaymentEvent {
  id?: string;
  user_id?: string;
  email: string;
  payment_link_id: string;
  product_name: string;
  amount?: number;
  currency?: string;
  status: "pending" | "completed" | "failed" | "refunded";
  stripe_session_id?: string;
  stripe_customer_id?: string;
  created_at?: string;
  metadata?: Record<string, any>;
}

export interface MembershipUpdate {
  pack?: string | null;
  optionals?: string[];
  active?: boolean;
  stripe_customer_id?: string;
  last_payment_date?: string;
  payment_status?: string;
  updated_at?: string;
}
