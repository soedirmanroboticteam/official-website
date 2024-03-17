import React from "react";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { teamSection, ourTeams } from "@/lib/ourTeam";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  return (
    <div className="flex w-full px-10 py-20 flex-col justify-center items-start gap-12">
      <SectionTitle title={teamSection.title} desc={teamSection.desc} />
      <div className="self-stretch justify-start items-start inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
          {ourTeams.map((team) => (
            <TeamCard
              title={team.title}
              desc={team.desc}
              logo={team.logo}
              key={team.title}
            />
          ))}
        </div>
      </div>
      <div className="self-stretch px-96 justify-center items-start inline-flex">
        <div className="self-stretch flex-col justify-start items-start inline-flex">
          <Button variant={"outline"} size={"xl"}>
            Check Out Our Full Organization Structure
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
