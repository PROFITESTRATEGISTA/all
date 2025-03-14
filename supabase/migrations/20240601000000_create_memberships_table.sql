-- Create memberships table
CREATE TABLE IF NOT EXISTS memberships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  pack TEXT,
  optionals TEXT[] DEFAULT '{}',
  active BOOLEAN DEFAULT TRUE,
  stripe_customer_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS memberships_user_id_idx ON memberships(user_id);
CREATE INDEX IF NOT EXISTS memberships_stripe_customer_id_idx ON memberships(stripe_customer_id);

-- Create RLS policies
ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;

-- Policy for users to view their own membership
CREATE POLICY "Users can view their own membership"
  ON memberships
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy for service role to manage all memberships
CREATE POLICY "Service role can manage all memberships"
  ON memberships
  USING (auth.role() = 'service_role');
