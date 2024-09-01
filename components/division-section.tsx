import { createClientBrowserServer } from "@/utils/supabase/server";
import React from "react";
import ProfilePicture from "./profile-picture";

interface TeamInterface {
  id: number;
  name: string;
}

interface DivisionSectionProps {
  id: number;
  name: string;
  description: string;
  team: TeamInterface;
}

const DivisionSection = async ({
  division,
}: {
  division: DivisionSectionProps;
}) => {
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase
    .from("members")
    .select("*, divisions(*), titles(*)")
    .eq("division", division.id)
    .order("title", { ascending: true });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="w-full px-2 md:px-12 py-6">
      <div className="w-full text-center font-bold text-2xl md:text-4xl font-poppins pb-8">
        {division.name}
      </div>
      <div className="flex flex-row justify-center gap-4 flex-wrap">
        {data && data.length ? (
          data.map((member, index) => (
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
