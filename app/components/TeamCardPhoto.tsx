"use client";
import React from "react";
import { Card } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

interface MemberInterface {
  id: number;
  name: string;
  image_url: string;
}

interface TeamCardPhotoProps {
  direction: "forward" | "backward";
  members: MemberInterface[];
}

const TeamCardPhoto = ({ direction, members }: TeamCardPhotoProps) => {
  return (
    <Card className="relative basis-full md:basis-1/3 min-h-72 bg-foreground overflow-hidden">
      <Carousel
        orientation="horizontal"
        plugins={[
          AutoScroll({ speed: 0.5, playOnInit: true, direction: direction }),
        ]}
        opts={{ loop: true }}
        className="absolute w-full h-full top-0 left-0"
      >
        <CarouselContent className={`-ml-0 flex`}>
          {direction == "forward"
            ? members.map((member, index) => (
                <CarouselItem key={index} className="pl-0 basis-[72px]">
                  <div className="relative w-[72px] h-72">
                    <Image
                      src={member.image_url}
                      alt={member.name}
                      fill={true}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </CarouselItem>
              ))
            : members.reverse().map((member, index) => (
                <CarouselItem key={index} className="pl-0 basis-[72px]">
                  <div className="relative w-[72px] h-72">
                    <Image
                      src={member.image_url}
                      alt={member.name}
                      fill={true}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
        </CarouselContent>
      </Carousel>
      <div
        className={`absolute w-full h-full ${
          direction == "forward" ? "bg-gradient-to-l" : "bg-gradient-to-r"
        } from-black/40 to-black/0`}
      ></div>
    </Card>
  );
};

export default TeamCardPhoto;
