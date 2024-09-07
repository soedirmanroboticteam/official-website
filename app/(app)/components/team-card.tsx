import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import TeamCardPhoto from "./team-card-photo";
import { Divisions, Members, Positions, Teams, Titles } from "@/app/types/global.types";

const TeamCard = ({
  teamDivision,
  members,
  index,
}: {
  teamDivision: Divisions;
  members: (Members & {
    positions: Positions & {
      divisions: Divisions & { teams: Teams };
      titles: Titles;
    };
  })[];
  index: number;
}) => {
  return (
    <div className="w-full flex flex-col-reverse md:odd:flex-row md:even:flex-row-reverse justify-center md:justify-between gap-2 md:gap-8">
      <Card className="basis-full md:basis-2/3 min-h-72">
        <CardHeader>
          <div className="relative w-16 h-10 overflow-x-hidden">
            <Image
              src={teamDivision.logo_url!}
              alt={teamDivision.name}
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
          <CardTitle className="pt-8">{teamDivision.name}</CardTitle>
          <CardDescription>{teamDivision.description}</CardDescription>
        </CardHeader>
      </Card>
      <TeamCardPhoto
        direction={index % 2 ? "backward" : "forward"}
        members={members}
      />
    </div>
  );
};

export default TeamCard;
