import HeroAboutUs from "@/app/about/components/HeroAboutUs";
import OurHistory from "@/app/about/components/OurHistory";
import OurAchievement from "./components/OurAchievement";
import OurPlan from "./components/OurPlan";

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
