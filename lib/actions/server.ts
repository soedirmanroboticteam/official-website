"use server";
import { redirect } from "next/navigation";
import { createClientBrowserServer } from "@/utils/supabase/server";

export const loginWithGoogleServer = async () => {
  "use server";
  const supabase = createClientBrowserServer();
  const { data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
    },
  });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
};

export const logoutServer = async () => {
  "use server";
  const supabase = createClientBrowserServer();
  await supabase.auth.signOut();
  redirect("/login");
};
