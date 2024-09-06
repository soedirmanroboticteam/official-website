"use client";
import React from "react";
import { Sponsors } from "@/app/types/global.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const SponsorSection = ({ sponsors }: { sponsors: Sponsors[] }) => {
  return (
    <Fade triggerOnce={true}>
      <section className="w-full flex-col justify-start items-start flex">
        <h2 className="text-3xl font-semibold leading-loose mx-auto">
          Our Sponsors
        </h2>
        <div className="w-full overflow-hidden">
          <div className="relative flex flex-row flex-nowrap justify-start py-2 w-full overflow-hidden">
            <Carousel
              orientation="horizontal"
              plugins={[AutoScroll({ speed: 1 })]}
              opts={{ loop: true }}
              className="w-full"
            >
              <CarouselContent className="flex flex-row justify-center gap-2">
                {sponsors.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/4 justify-center items-center gap-1 flex"
                  >
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      height={720}
                      width={720}
                      className="h-24 md:h-32 w-auto"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="w-full inset-0 bg-gradient-to-l from-background from-0% to-transparent to-5% absolute"></div>
            <div className="w-full inset-0 bg-gradient-to-r from-background from-0% to-transparent to-5% absolute"></div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default SponsorSection;
