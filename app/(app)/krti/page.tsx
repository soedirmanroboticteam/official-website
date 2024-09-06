import { createClientBrowserServer } from "@/utils/supabase/server";
import DivisionSection from "@/app/(app)/components/division-section";
import { Metadata } from "next";
import { Divisions } from "@/app/types/global.types";
import { Member } from "../components/contact-section";
import HeroAboutUs from "../components/hero-about-us";

export const metadata: Metadata = {
  title: "KRTI",
  description: "KRTI Teams page",
};

export default async function Home() {
  const supabase = createClientBrowserServer();

  const [divisions, members] = await Promise.all([
    await supabase
      .from("divisions")
      .select("*")
      .eq("team_id", 3)
      .order("id", { ascending: true })
      .returns<Divisions[]>(),
    await supabase
      .from("members")
      .select(
        "name, positions(divisions(id, name, teams(id), description, logo_url), titles(id, name)), image_url"
      )
      .eq("positions.divisions.teams.id", 3)
      .order("position_id", { ascending: true })
      .returns<Member[]>(),
  ]);

  if (divisions.error || !divisions.data || members.error || !members.data) {
    return (
      <div>
        Error:{" "}
        {divisions.error?.message ?? members.error?.message ?? "Unknown error"}
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <HeroAboutUs title="KRTI Teams" />
      {divisions.data.map((division, index) => (
        <DivisionSection
          division={division}
          members={members.data
            .filter((member) => member.positions.divisions.id === division.id)
            .sort((a, b) => a.positions.titles.id - b.positions.titles.id)}
          key={index}
        />
      ))}
    </main>
  );
}
