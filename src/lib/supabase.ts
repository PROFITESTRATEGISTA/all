import { createClient } from "@supabase/supabase-js";

// Default to placeholder values for development when env vars aren't set
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://placeholder-project.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
