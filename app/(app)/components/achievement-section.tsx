"use client";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { Fade } from "react-awesome-reveal";
import { Achievements } from "@/app/types/global.types";

const AchievementSection = ({
  achievements,
}: {
  achievements: Achievements[];
}) => {
  return (
    <Fade triggerOnce={true}>
      <section className="self-stretch px-6 md:px-14 flex-col justify-center items-center flex">
        <h2 className="text-2xl font-semibold leading-loose">
          Our Achievements
        </h2>
        <div className="w-full overflow-hidden">
          <div className="relative flex flex-row flex-nowrap justify-start py-2 w-full overflow-hidden">
            <Carousel
              orientation="horizontal"
              plugins={[AutoScroll({ speed: 1 })]}
              opts={{ loop: true }}
              className="w-full"
            >
              <CarouselContent className="flex flex-row gap-2">
                {achievements.map((achievement, index) => (
                  <CarouselItem
                    key={index}
                    className=" basis-auto h-16 justify-center items-center gap-1 flex"
                  >
                    <Image
                      width={1000}
                      height={64}
                      src={achievement.icon_url}
                      alt={achievement.title}
                      className="w-auto h-full"
                    />
                    <div className=" min-w-32 flex-col justify-center items-start flex">
                      <div className="text-white text-base font-semibold">
                        {achievement.title}
                      </div>
                      <div className="text-white text-xs font-normal">
                        {achievement.subtitle}
                        <br />
                        {achievement.description}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="w-full inset-0 bg-gradient-to-l from-[#000000] from-0% to-transparent to-5% absolute"></div>
            <div className="w-full inset-0 bg-gradient-to-r from-[#000000] from-0% to-transparent to-5% absolute"></div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default AchievementSection;
