import HeroManagement from "@/app/components/HeroManagement";
import OurHistory from "@/app/components/OurHistory";
import OurAchievement from "../components/OurAchievement";
import OurPlan from "../components/OurPlan";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <HeroManagement />
      <OurHistory />
      <OurAchievement />
      <OurPlan />
    </main>
  );
}
