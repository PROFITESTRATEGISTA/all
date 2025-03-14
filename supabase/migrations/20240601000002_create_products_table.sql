-- Create products table to store information about available products
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL, -- 'pack' or 'optional'
  price DECIMAL(10, 2) NOT NULL,
  payment_link_id TEXT NOT NULL,
  stripe_price_id TEXT,
  features TEXT[] DEFAULT '{}',
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS products_payment_link_id_idx ON products(payment_link_id);
CREATE INDEX IF NOT EXISTS products_stripe_price_id_idx ON products(stripe_price_id);

-- Create RLS policies
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policy for anyone to view active products
CREATE POLICY "Anyone can view active products"
  ON products
  FOR SELECT
  USING (active = TRUE);

-- Policy for service role to manage all products
CREATE POLICY "Service role can manage all products"
  ON products
  USING (auth.role() = 'service_role');
