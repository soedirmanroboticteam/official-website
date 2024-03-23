import { sora } from "@/app/styles/fonts";
import React from "react";

const SectionTitle = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex flex-col md:grid md:grid-flow-col grid-cols-9 w-full py-5 justify-center items-start gap-2 md:gap-5">
      <div className="col-span-4 md:px-2 justify-start items-start flex">
        <div className="self-stretch pr-12 pb-12 flex-col justify-start items-start inline-flex">
          <div
            className={`${sora.className} text-foreground text-5xl font-normal leading-10`}
          >
            {title}
          </div>
        </div>
      </div>
      <div className="col-span-5 w-full md:px-2 justify-start items-start flex">
        <div className="self-stretch flex-col justify-start items-start inline-flex">
          <div
            className={`${sora.className} w-full text-justify text-foreground text-opacity-90 text-xl font-normal leading-7`}
          >
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
