import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qqekwoltwtyuvskbcizm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxZWt3b2x0d3R5dXZza2JjaXptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNTI0OTgsImV4cCI6MjA4MDgyODQ5OH0.ym5jOPwZ7vRKTSnsr0cD8tP-x3OJG4PbIzdKMSlL8cQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
