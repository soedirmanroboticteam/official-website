import React from "react";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { teamSection } from "@/lib/ourTeam";
import TeamCard from "./team-card";
import Link from "next/link";
import { createClientBrowserServer } from "@/utils/supabase/server";

const TeamSection = async () => {
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase
    .from("divisions")
    .select("*")
    .or("team_id.eq.2, team_id.eq.3")
    .order("id", { ascending: true });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="flex w-full px-4 md:px-10 py-8 md:py-20 flex-col justify-center items-start gap-12">
      <div className="md:px-12">
        <SectionTitle title={teamSection.title} desc={teamSection.desc} />
      </div>
      <div className="self-stretch justify-start items-start flex md:px-12">
        <div className="w-full grow shrink basis-1 flex-col justify-start items-start gap-8 flex">
          {data.map((team, index) => (
            <TeamCard team={team} index={index} key={index} />
          ))}
        </div>
      </div>
      <div className="self-stretch justify-center items-start inline-flex">
        <div className="self-stretch flex-col justify-start items-start inline-flex">
          <Link href={"/about"}>
            <Button variant="outline" size="lg" className="max-w-full">
              Check Out Our Full Organization
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
