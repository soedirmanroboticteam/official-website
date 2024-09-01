"use client"; //Client Side
import { OfficialLogo } from "@/assets";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroGallery from "./hero-gallery";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <section className="w-full flex-col justify-start items-center gap-8 py-6 md:py-12 flex">
      <Fade triggerOnce={true}>
        <div className="relative flex-col md:flex-row justify-center items-center gap-8 md:gap-32 flex">
          <div className="relative h-60 md:h-80">
            <OfficialLogo height={"100%"} />
          </div>
          <div className="relative flex-col justify-start items-start flex">
            <div className="justify-center items-start flex">
              <div className="self-stretch flex-col justify-start items-center flex">
                <div className="text-center text-foreground text-xs md:text-xl font-normal font-poppins md:leading-7">
                  <p>Universitas Jenderal Soedirman</p>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-center items-start flex">
              <div className="w-full self-stretch py-1 justify-center items-center flex">
                <div className="text-white text-5xl md:text-8xl font-bold font-poppins uppercase leading-10">
                  Soedirman <br />
                  Robotic <br />
                  Team
                </div>
              </div>
            </div>
            <div className="justify-center items-start flex">
              <div className="self-stretch flex-col justify-start items-center flex">
                <div className="text-center text-foreground text-xs md:text-xl font-normal font-poppins italic md:leading-7">
                  “The Future We Make, For The Better Life!”
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-5 justify-center items-center flex">
          <Button variant="outline" size="lg">
            <Link href={"mailto:soedirmanrobotic@gmail.com"}>
              Get In Touch With Us
            </Link>
          </Button>
        </div>
        <HeroGallery />
      </Fade>
    </section>
  );
};

export default HeroSection;
