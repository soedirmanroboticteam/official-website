import { createClientBrowserServer } from "@/lib/supabase/server";
import HeroManagement from "@/app/management/components/HeroManagement";
import DivisionSection from "@/components/DivisionSection";

export default async function Home() {
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase
    .from("divisions")
    .select("*")
    .eq("team_id", "1")
    .order("id", { ascending: true });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="flex flex-col items-center justify-between px-2">
      <HeroManagement />
      {data.map((division, index) => (
        <DivisionSection division={division} key={index} />
      ))}
    </main>
  );
}
