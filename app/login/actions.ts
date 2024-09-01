"use server";
import { createClientBrowserServer } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

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
