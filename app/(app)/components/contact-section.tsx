"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import Link from "next/link";

export type Member = {
  name: string;
  positions: {
    divisions: {
      id: number;
      name: string;
      teams: { id: number };
      description: string;
      logo_url: string;
    };
    titles: { id: number; name: string };
  };
  image_url: string;
};

const ContactSection = ({ members }: { members: Member[] }) => {
  return (
    <Fade triggerOnce={true}>
      <section className="w-full px-1 md:px-12">
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
      </section>
    </Fade>
  );
};

export default ContactSection;
