import HeroManagement from "@/app/components/management/HeroManagement";
import BPHSection from "@/app/components/management/BPHSection";
import HRDSection from "@/app/components/management/HRDSection";
import MEDCRESection from "@/app/components/management/MEDCRESection";
import PRSection from "@/app/components/management/PRSection";
import SponsorshipSection from "@/app/components/management/SponsorshipSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-2">
      <HeroManagement />
      <BPHSection />
      <HRDSection />
      <MEDCRESection />
      <PRSection />
      <SponsorshipSection />
    </main>
  );
}
