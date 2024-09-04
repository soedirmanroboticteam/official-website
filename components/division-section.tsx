import { createClientBrowserServer } from "@/utils/supabase/server";
import React from "react";
import ProfilePicture from "./profile-picture";
import { Divisions } from "@/app/types/global.types";
import { Member } from "@/app/(app)/components/contact-section";

const DivisionSection = ({
  division,
  members,
}: {
  division: Divisions;
  members: Member[];
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
