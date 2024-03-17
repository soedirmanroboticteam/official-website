// import Image from "next/image";

import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12">
      <HeroSection />
      <TeamSection />
    </main>
  );
}
