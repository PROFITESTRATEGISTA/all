-- Update memberships table to add payment tracking
ALTER TABLE memberships
ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT,
ADD COLUMN IF NOT EXISTS last_payment_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS payment_status TEXT;

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_memberships_user_id ON memberships(user_id);
CREATE INDEX IF NOT EXISTS idx_memberships_stripe_customer_id ON memberships(stripe_customer_id);
