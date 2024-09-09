import { createClientBrowserServer } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import React from "react";

async function page({ params }: { params: { slug: string } }) {
  const supabase = createClientBrowserServer();

  const { data } = await supabase
    .from("dynamics")
    .select("*")
    .eq("slug", params.slug)
    .limit(1)
    .maybeSingle();

  if (!data) {
    return notFound();
  }

  return <main className="container" dangerouslySetInnerHTML={{__html: data.content}} />;
}

export default page;
