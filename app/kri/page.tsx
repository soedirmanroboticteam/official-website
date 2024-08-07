import { createClientBrowserServer } from "@/lib/supabase/server";
import HeroKri from "@/app/kri/components/HeroKri";
import DivisionSection from "@/components/DivisionSection";

export default async function Home() {
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase
    .from("divisions")
    .select("*")
    .eq("team_id", "2")
    .order("id", { ascending: true });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <HeroKri />
      {data.map((division, index) => (
        <DivisionSection division={division} key={index} />
      ))}
    </main>
  );
}
