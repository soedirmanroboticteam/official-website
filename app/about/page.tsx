import HeroAboutUs from "@/app/components/about/HeroAboutUs";
import OurHistory from "@/app/components/about/OurHistory";
import OurAchievement from "../components/about/OurAchievement";
import OurPlan from "../components/about/OurPlan";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <HeroAboutUs />
      <OurHistory />
      <OurAchievement />
      <OurPlan />
    </main>
  );
}
