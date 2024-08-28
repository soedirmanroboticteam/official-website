import { sora } from "@/app/styles/fonts";
import { createClientBrowserServer } from "@/lib/supabase/server";
import React from "react";
import SponsorCarousel from "./SponsorCarousel";
import { Fade } from "react-awesome-reveal";

const SponsorSection = async () => {
  const supabase = createClientBrowserServer();

  const {data, error} = await supabase.from("sponsors").select("*");

  return (
    <section
      className={`${sora.className} w-full flex-col justify-start items-start flex`}
    >
      <div className="grow shrink basis-0 self-stretch px-6 md:px-14 flex-col justify-center items-center flex">
        <div className="pb-5 flex-col justify-start items-start flex">
          <div className="h-8 px-2 justify-start items-start flex">
            <div className="flex-col justify-start items-start flex">
              <div className="text-4xl font-semibold leading-loose">
                Our Sponsors
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch px-14 flex-col justify-center items-center flex">
        <div className="w-full overflow-hidden">
          <div className="flex overflow-hidden w-full justify-start items-start">
            <div className="relative flex flex-row flex-nowrap justify-start py-2 w-full overflow-hidden">
              <SponsorCarousel items={data} />
              <div className="w-full inset-0 bg-gradient-to-l from-[#000000] from-0% to-transparent to-5% absolute"></div>
              <div className="w-full inset-0 bg-gradient-to-r from-[#000000] from-0% to-transparent to-5% absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
