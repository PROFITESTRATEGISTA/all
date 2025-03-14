-- Create payment_history table to track all payments
CREATE TABLE IF NOT EXISTS payment_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  payment_link_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'BRL',
  stripe_payment_id TEXT,
  status TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS payment_history_user_id_idx ON payment_history(user_id);
CREATE INDEX IF NOT EXISTS payment_history_stripe_payment_id_idx ON payment_history(stripe_payment_id);

-- Create RLS policies
ALTER TABLE payment_history ENABLE ROW LEVEL SECURITY;

-- Policy for users to view their own payment history
CREATE POLICY "Users can view their own payment history"
  ON payment_history
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy for service role to manage all payment history
CREATE POLICY "Service role can manage all payment history"
  ON payment_history
  USING (auth.role() = 'service_role');
