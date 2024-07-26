"use client";
import React from "react";
import { Button } from "../../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import { contactImages } from "@/lib/contactSection";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const ContactSection = () => {
  return (
    <section className="w-full px-1 md:px-12">
      <Fade triggerOnce={true}>
        <div className="relative w-full h-96 flex flex-col bg-accent rounded-3xl justify-center items-center gap-6 overflow-hidden">
          <Carousel
            orientation="horizontal"
            plugins={[AutoScroll({ speed: 0.5, playOnInit: true })]}
            opts={{ loop: true }}
            className="absolute w-full h-full top-0 left-0"
          >
            <CarouselContent className="-ml-0">
              {contactImages.map((contact, index) => (
                <CarouselItem key={index} className=" pl-0 basis-24">
                  <Image src={contact.img} alt="" className="w-24" />
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
    </section>
  );
};

export default ContactSection;
