import React from "react";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { ourTeams } from "@/lib/ourTeam";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  return (
    <div className="flex w-full px-10 py-20 flex-col justify-center items-start gap-12">
      <SectionTitle
        title="Our Team"
        desc="Soedirman Robotic Team adalah salah satu unit kegiatan mahasiswa yang berkecimpung dalam pengembangan dunia robotic serta sebagai sarana pengembangan kreativitas mahasiswa dalam berkarya."
      />
      <div className="self-stretch justify-start items-start inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-20 inline-flex">
          {ourTeams.map((team) => (
            <TeamCard title={team.title} desc={team.desc} logo={team.logo} />
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
