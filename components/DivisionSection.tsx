import { createClientBrowserServer } from "@/lib/supabase/server";
import React from "react";
import ProfilePicture from "./ProfilePicture";

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

  return (
    <section className="w-3/4 flex flex-wrap md:flex-row justify-center items-center py-6">
      <div className="w-full text-center font-bold text-2xl md:text-4xl font-poppins pb-8">
        {division.name}
      </div>
      {data && data.length ? (
        data.map((member, index) => (
          <ProfilePicture member={member} key={index} />
        ))
      ) : (
        <div>No data</div>
      )}
    </section>
  );
};

export default DivisionSection;
