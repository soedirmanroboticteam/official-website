import HeroManagement from "@/app/components/HeroManagement";
import OurHistory from "@/app/components/OurHistory";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <HeroManagement />
      <OurHistory />
    </main>
  );
}
