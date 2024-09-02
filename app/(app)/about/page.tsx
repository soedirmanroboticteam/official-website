import HeroAboutUs from "@/app/(app)/about/components/hero-about-us";
import OurHistory from "@/app/(app)/about/components/our-history";
import OurAchievement from "./components/our-achievement";
import OurPlan from "./components/our-plan";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us page",
};

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
