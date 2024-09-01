"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const SponsorCarousel = ({
  items,
}: {
  items:
    | {
        id: number;
        title: string;
        description: string;
        image_url: string;
      }[]
    | null;
}) => {
  return (
    <Carousel
      orientation="horizontal"
      plugins={[AutoScroll({ speed: 1 })]}
      opts={{ loop: true }}
      className="w-full"
    >
      <CarouselContent className="flex flex-row justify-center gap-2">
        {items?.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/4 justify-center items-center gap-1 flex"
          >
            <Image
              height={128}
              width={128}
              src={item.image_url}
              alt={item.title}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SponsorCarousel;
