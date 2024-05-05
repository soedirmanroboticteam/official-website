import AchievementSection from "@/app/components/AchievementSection";
import ContactSection from "@/app/components/ContactSection";
import FaqSection from "@/app/components/FaqSection";
import HeroSection from "@/app/components/HeroSection";
import TeamSection from "@/app/components/TeamSection";
import SponsorSection from "./components/SponsorSection";

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
