"use client";
import { redirect } from "next/navigation";
import { createClientBrowserClient } from "../supabase/client";

export const loginWithGoogleClient = async () => {
  const supabase = createClientBrowserClient();
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${location.origin}/auth/callback`,
    },
  });
};

export const logoutClient = async () => {
  const supabase = createClientBrowserClient();
  await supabase.auth.signOut();
  redirect("/login");
};
