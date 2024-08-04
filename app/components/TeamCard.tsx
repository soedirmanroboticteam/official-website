import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Image from "next/image";
import TeamCardPhoto from "./TeamCardPhoto";
import { createClientBrowserServer } from "@/lib/supabase/server";

interface TeamCardProps {
  id: number;
  name: string;
  description: string;
  logo_url: string;
}

const TeamCard = async ({
  team,
  index,
}: {
  team: TeamCardProps;
  index: number;
}) => {
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase
    .from("members")
    .select("id, name, image_url, divisions(*)")
    .eq("division", team.id)
    .order("title", { ascending: true });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full flex flex-col-reverse md:odd:flex-row md:even:flex-row-reverse justify-center md:justify-between gap-2 md:gap-8">
      <Card className="basis-full md:basis-2/3 min-h-72">
        <CardHeader>
          <div className="relative w-16 h-10 overflow-x-hidden">
            <Image
              src={team.logo_url}
              alt={team.name}
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
          <CardTitle className="pt-8">{team.name}</CardTitle>
          <CardDescription>{team.description}</CardDescription>
        </CardHeader>
      </Card>
      <TeamCardPhoto
        direction={index % 2 ? "backward" : "forward"}
        members={data}
      />
    </div>
  );
};

export default TeamCard;
