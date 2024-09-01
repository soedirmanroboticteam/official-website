import React from "react";
import { createClientBrowserServer } from "@/utils/supabase/server";
import ContactPhotos from "./contact-photos";

const ContactSection = async () => {
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase
    .from("members")
    .select("id, name, image_url, divisions!inner(team_id)")
    .eq("divisions.team_id", "1")
    .order("id", { ascending: true });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="w-full px-1 md:px-12">
      <ContactPhotos members={data} />
    </section>
  );
};

export default ContactSection;
