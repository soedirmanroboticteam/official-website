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
    <div className="w-full h-72 flex odd:flex-row even:flex-row-reverse gap-24">
      <Card className="w-full h-full">
        <CardHeader>
          <div className="w-fit">{logo}</div>
          <CardTitle className="pt-8">{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default TeamCard;
