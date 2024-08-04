"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

interface ContactPhotosProps {
  id: number;
  name: string;
  image_url: string;
}

const ContactPhotos = ({ members }: { members: ContactPhotosProps[] }) => {
  return (
    <Fade triggerOnce={true}>
      <div className="relative w-full h-96 flex flex-col bg-accent rounded-3xl justify-center items-center gap-6 overflow-hidden">
        <Carousel
          orientation="horizontal"
          plugins={[AutoScroll({ speed: 0.5, playOnInit: true })]}
          opts={{ loop: true }}
          className="absolute w-full h-full top-0 left-0"
        >
          <CarouselContent className="-ml-0">
            {members.map((member, index) => (
              <CarouselItem key={index} className="relative pl-0 basis-24">
                <div className="w-24 h-96">
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
        <div className="absolute w-full h-full bg-black/40"></div>
        <h2 className="relative text-6xl font-bold">Lets talk</h2>
        <Link href={"mailto:soedirmanrobotic@gmail.com"}>
          <Button
            variant={"default"}
            size={"lg"}
            className="relative text-base px-12"
          >
            Get In Touch
          </Button>
        </Link>
      </div>
    </Fade>
  );
};

export default ContactPhotos;
