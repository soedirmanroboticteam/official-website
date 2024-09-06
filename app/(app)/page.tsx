import AchievementSection from "@/app/(app)/components/achievement-section";
import ContactSection, { Member } from "@/app/(app)/components/contact-section";
import FaqSection from "@/app/(app)/components/faq-section";
import HeroSection from "@/app/(app)/components/hero-section";
import TeamSection from "@/app/(app)/components/team-section";
import SponsorSection from "./components/sponsor-section";
import { Metadata } from "next";
import { createClientBrowserServer } from "@/utils/supabase/server";
import {
  Achievements,
  Divisions,
  FrequentlyAskedQuestions,
  HeroImages,
  Sponsors,
} from "../types/global.types";

export const metadata: Metadata = {
  title: "Home",
  description: "Homepage",
};

export default async function Home() {
  const supabase = createClientBrowserServer();

  const [
    heroImages,
    sponsors,
    teamDivisions,
    members,
    achievements,
    frequentlyAskedQuestions,
  ] = await Promise.all([
    supabase
      .from("hero_images")
      .select("*")
      .limit(6)
      .order("id", { ascending: true })
      .returns<HeroImages[]>(),
    supabase.from("sponsors").select("*").returns<Sponsors[]>(),
    supabase.from("divisions").select("*").returns<Divisions[]>(),
    supabase
      .from("members")
      .select(
        "name, positions(divisions(id, name, teams(id), description, logo_url), titles(id)), image_url"
      )
      .order("position_id", { ascending: true })
      .returns<Member[]>(),
    supabase.from("achievements").select("*").returns<Achievements[]>(),
    supabase
      .from("frequently_asked_questions")
      .select("*")
      .returns<FrequentlyAskedQuestions[]>(),
  ]);

  if (
    heroImages.error ||
    !heroImages.data ||
    sponsors.error ||
    !sponsors.data ||
    teamDivisions.error ||
    !teamDivisions.data ||
    members.error ||
    !members.data ||
    achievements.error ||
    !achievements.data ||
    frequentlyAskedQuestions.error ||
    !frequentlyAskedQuestions.data
  ) {
    return (
      <div>
        Error:{" "}
        {heroImages.error?.message ??
          sponsors.error?.message ??
          teamDivisions.error?.message ??
          members.error?.message ??
          achievements.error?.message ??
          frequentlyAskedQuestions.error?.message ??
          "Unknown error"}
      </div>
    );
  }

  return (
    <main className="min-h-screen px-2">
      <HeroSection heroImages={heroImages.data} />
      <SponsorSection sponsors={sponsors.data} />
      <TeamSection
        teamDivisions={teamDivisions.data.filter((item) => item.team_id >= 2)}
        members={members.data.filter(
          (data) => data.positions.divisions.teams.id >= 2
        )}
      />
      <AchievementSection achievements={achievements.data} />
      <FaqSection frequentlyAskedQuestions={frequentlyAskedQuestions.data} />
      <ContactSection members={members.data} />
    </main>
  );
}
