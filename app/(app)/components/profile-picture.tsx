import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Members,
  Positions,
  Divisions,
  Teams,
  Titles,
} from "@/app/types/global.types";

const ProfilePicture = ({
  member,
}: {
  member: Members & {
    positions: Positions & {
      divisions: Divisions & { teams: Teams };
      titles: Titles;
    };
  };
}) => {
  return (
    <div className="w-full lg:w-1/4 md:w-1/2 pb-8 md:pb-16 px-5 flex flex-col items-center gap-2">
      <Avatar className="h-32 w-32 border-2 border-muted-foreground">
        <AvatarImage src={member.image_url} alt={member.name} />
        <AvatarFallback>
          {member.name[0] +
            member.name.split(" ")[member.name.split(" ").length - 1][0]}
        </AvatarFallback>
      </Avatar>
      <div className="text-lg md:text-xl lg:text-xl text-center font-bold">
        {member.name}
      </div>
      <div className="text-xs md:text-sm lg:text-base text-center">
        {member.positions.divisions.id == 1
          ? member.positions.titles.name
          : member.positions.titles.name +
            " of " +
            member.positions.divisions.name}
      </div>
    </div>
  );
};

export default ProfilePicture;
