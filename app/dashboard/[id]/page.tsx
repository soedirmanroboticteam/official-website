import { toast } from "@/components/ui/use-toast";
import { createClientBrowserServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const InternDetailPage = async () => {
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) redirect("/login");

  const isAdmin = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", data.user.id)
    .limit(1)
    .single();

  if (isAdmin.error || !Boolean(isAdmin.data.is_admin)) {
    redirect("/internship");
  }

  return <main className="container mx-auto py-10">InternDetailPage</main>;
};

export default InternDetailPage;
