import {
  Divisions,
  Interns,
  Positions,
  Titles,
} from "@/app/types/global.types";
import { createClientBrowserServer } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

async function Announcement() {
  const supabase = createClientBrowserServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data } = await supabase
    .from("interns")
    .select("*")
    .eq("id", user.id)
    .maybeSingle<
      Interns & {
        positions: Positions & {
          divisions: Divisions;
          titles: Titles;
        };
      }
    >();

  if (!data) {
    return <div>Not found</div>;
  }

  return <div>Announcement</div>;
}

export default Announcement;
