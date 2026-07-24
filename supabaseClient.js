import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://ybkqlrthtoeeadbpwxsn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlia3FscnRodG9lZWFkYnB3eHNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NjU1NjUsImV4cCI6MjEwMDQ0MTU2NX0.kc1L1AeuoPdWsj8hDs8HLHvPK09KxUNcYAsUWbNRwuU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
