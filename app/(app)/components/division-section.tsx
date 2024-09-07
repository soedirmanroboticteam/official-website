import React from "react";
import ProfilePicture from "./profile-picture";
import {
  Divisions,
  Members,
  Positions,
  Teams,
  Titles,
} from "@/app/types/global.types";

const DivisionSection = ({
  division,
  members,
}: {
  division: Divisions;
  members: (Members & {
    positions: Positions & {
      divisions: Divisions & { teams: Teams };
      titles: Titles;
    };
  })[];
}) => {
  return (
    <section className="w-full px-2 md:px-12 py-6">
      <div className="w-full text-center font-bold text-2xl md:text-4xl font-poppins pb-8">
        {division.name}
      </div>
      <div className="flex flex-row justify-center gap-4 flex-wrap">
        {members && members.length ? (
          members.map((member, index) => (
            <ProfilePicture member={member} key={index} />
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </section>
  );
};

export default DivisionSection;
