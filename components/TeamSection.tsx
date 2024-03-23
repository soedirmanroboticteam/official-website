import React from "react";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { teamSection, ourTeams } from "@/lib/ourTeam";
import TeamCard from "./TeamCard";
import TeamCardPhoto from "./TeamCardPhoto";

const TeamSection = () => {
  return (
    <section className="flex w-full px-4 md:px-10 py-20 flex-col justify-center items-start gap-12">
      <div className="md:px-12">
        <SectionTitle title={teamSection.title} desc={teamSection.desc} />
      </div>
      <div className="self-stretch justify-start items-start flex md:px-12">
        <div className="w-full grow shrink basis-1 flex-col justify-start items-start gap-8 flex">
          {ourTeams.map((team, index) => (
            <div
              className="w-full flex flex-col-reverse md:odd:flex-row md:even:flex-row-reverse justify-center md:justify-between gap-2 md:gap-8"
              key={index}
            >
              <TeamCard
                title={team.title}
                desc={team.desc}
                logo={team.logo}
                key={team.title}
              />
              <TeamCardPhoto
                direction={team.direction}
                members={team.members}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="self-stretch justify-center items-start inline-flex">
        <div className="self-stretch flex-col justify-start items-start inline-flex">
          <Button variant={"outline"} size={"xl"}>
            Check Out Our Full Organization Structure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
