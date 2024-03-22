import { OfficialLogo } from "@/assets";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full flex-col justify-start items-center flex">
      <div className="self-stretch py-12 pl-24 bg-black justify-center items-center gap-32 flex">
        <div className=" h-full">
          <OfficialLogo height={360} />
        </div>
        <div className="flex-col justify-start items-start flex">
          <div className="justify-center items-start inline-flex">
            <div className="self-stretch flex-col justify-start items-center inline-flex">
              <div className="text-center text-foreground text-xl font-normal font-poppins leading-7">
                Universitas Jenderal Soedirman
              </div>
            </div>
          </div>
          <div className="self-stretch justify-center items-start inline-flex">
            <div className="w-full self-stretch py-1 justify-center items-center flex">
              <div className="text-white text-8xl font-bold font-poppins uppercase ">
                Soedirman <br />
                Robotic <br />
                Team
              </div>
            </div>
          </div>
          <div className="justify-center items-start inline-flex">
            <div className="self-stretch flex-col justify-start items-center inline-flex">
              <div className="text-center text-foreground text-xl font-normal font-poppins italic leading-7">
                “The Future We Make, For The Better Life!”
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-5 justify-center items-center flex">
        <Button variant={"outline"} size={"xl"}>
          <Link href={"mailto:soedirmanrobotic@gmail.com"}>
            Get In Touch With Us
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
