// import Image from "next/image";

import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <HeroSection />
      <TeamSection />
      <FaqSection />
    </main>
  );
}
