"use client";
import React from "react";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import TeamCard from "./team-card";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Member } from "./contact-section";
import { Divisions } from "@/app/types/global.types";
import { Fade } from "react-awesome-reveal";

const TeamSection = ({
  teamDivisions,
  members,
}: {
  teamDivisions: Divisions[];
  members: Member[];
}) => {
  return (
    <Fade triggerOnce>
      <section className="flex w-full px-4 md:px-10 py-8 md:py-20 flex-col justify-center items-start gap-12">
        <div className="md:px-12">
          <SectionTitle title={"Our Teams"} desc={siteConfig.description} />
        </div>
        <div className="self-stretch justify-start items-start flex md:px-12">
          <div className="w-full grow shrink basis-1 flex-col justify-start items-start gap-8 flex">
            {teamDivisions.map((team, index) => (
              <TeamCard
                teamDivision={team}
                members={members
                  .filter((member) => member.positions.divisions.id === team.id)
                  .sort(
                    (a, b) => a.positions.titles.id - b.positions.titles.id
                  )}
                index={index}
                key={index}
              />
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
    </Fade>
  );
};

export default TeamSection;
