import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const TeamCard = ({
  logo,
  title,
  desc,
}: {
  logo: React.JSX.Element;
  title: string;
  desc: string;
}) => {
  return (
    <Card className="basis-full md:basis-2/3 h-72">
      <CardHeader>
        <div className="w-fit">{logo}</div>
        <CardTitle className="pt-8">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default TeamCard;
