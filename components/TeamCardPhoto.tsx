"use client";
import React from "react";
import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image, { StaticImageData } from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

const TeamCardPhoto = ({
  direction,
  members,
}: {
  direction: string;
  members: {
    alt: string;
    img: StaticImageData;
  }[];
}) => {
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
                  <Image src={member.img} alt={member.alt} height={288} />
                </CarouselItem>
              ))
            : members.reverse().map((member, index) => (
                <CarouselItem key={index} className="pl-0 basis-[72px]">
                  <Image src={member.img} alt={member.alt} height={288} />
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
