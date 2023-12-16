import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qlixlmpvjmkwyqqsfwub.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsaXhsbXB2am1rd3lxcXNmd3ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5MDA2MDQsImV4cCI6MjAxNjQ3NjYwNH0.yLLEeGmBScIWS8PTuBIYjkXRsxdJ-jM7aaV3rJ3sG2g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
