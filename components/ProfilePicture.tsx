import Image from "next/image";
import React from "react";

interface TeamInterface {
  id: number;
  name: string;
}

interface DivisionInterface {
  id: number;
  name: string;
  description: string;
  team: TeamInterface;
}

interface TitleInterface {
  id: number;
  name: string;
}

interface ProfilePictureProps {
  name: string;
  image_url: string;
  divisions: DivisionInterface;
  titles: TitleInterface;
}

const ProfilePicture = ({ member }: { member: ProfilePictureProps }) => {
  return (
    <div className="w-full lg:w-1/4 md:w-1/2 pb-8 md:pb-16 px-5 flex flex-col items-center gap-2">
      <Image
        src={member.image_url}
        alt={member.name}
        width={120}
        height={120}
        className="rounded-full border border-white"
      />
      <div className="text-lg md:text-xl lg:text-xl text-center font-bold">
        {member.name}
      </div>
      <div className="text-xs md:text-sm lg:text-base text-center">
        {member.divisions.id == 1
          ? member.titles.name
          : member.titles.name + " of " + member.divisions.name}
      </div>
    </div>
  );
};

export default ProfilePicture;
