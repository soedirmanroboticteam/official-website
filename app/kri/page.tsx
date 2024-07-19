import HeroKri from "@/app/components/technical/HeroKri";
import KRAITeam from "../components/technical/KRAISection";
import KRSRISection from "../components/technical/KRSRISection";
import KRTMISection from "../components/technical/KRTMISection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <HeroKri />
      <KRAITeam/>
      <KRSRISection />
      <KRTMISection />
    </main>
  );
}
