import HeroKrti from "@/app/components/technical/HeroKrti";
import RPSection from "@/app/components/technical/RPSection";
import FWSection from "@/app/components/technical/FWSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <HeroKrti />
      <RPSection />
      <FWSection />
    </main>
  );
}
