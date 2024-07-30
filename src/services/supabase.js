import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hmanfgstzdlrwfaakfrc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtYW5mZ3N0emRscndmYWFrZnJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3OTIyNjYsImV4cCI6MjAzMjM2ODI2Nn0.o9y33k0KwJM3c8ySuwFyR70WoJLJz3f1xbZgoHQLXS4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
