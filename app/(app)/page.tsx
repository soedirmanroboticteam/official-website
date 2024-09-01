import AchievementSection from "@/app/(app)/components/achievement-section";
import ContactSection from "@/app/(app)/components/contact-section";
import FaqSection from "@/app/(app)/components/faq-section";
import HeroSection from "@/app/(app)/components/hero-section";
import TeamSection from "@/app/(app)/components/team-section";
import SponsorSection from "./components/sponsor-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <HeroSection />
      <SponsorSection />
      <TeamSection />
      <AchievementSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
