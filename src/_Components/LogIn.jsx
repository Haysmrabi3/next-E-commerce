"use client";

import { supabase } from "@/lib/supabase";

export default function LoginTest() {
  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "test@gmail.com",
      password: "12345678",
    });

    console.log("DATA:", data);
    console.log("ERROR:", error);
  };

  return (
    <button onClick={login} className="bg-blue-500 text-white p-2">
      Login Test
    </button>
  );
}