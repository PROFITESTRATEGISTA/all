-- Create payment events table to track all payment activities
CREATE TABLE IF NOT EXISTS payment_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  email TEXT NOT NULL,
  payment_link_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  amount DECIMAL(10, 2),
  currency TEXT,
  status TEXT NOT NULL,
  stripe_session_id TEXT,
  stripe_customer_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_payment_events_user_id ON payment_events(user_id);
CREATE INDEX IF NOT EXISTS idx_payment_events_email ON payment_events(email);
CREATE INDEX IF NOT EXISTS idx_payment_events_status ON payment_events(status);
