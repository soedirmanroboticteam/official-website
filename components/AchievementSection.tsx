import { sora } from "@/app/styles/fonts";
import { ourAchievements } from "@/lib/ourAchievements";
import Image from "next/image";
import React from "react";

const AchievementSection = () => {
  return (
    <section
      className={`${sora.className} w-full flex-col justify-start items-start inline-flex`}
    >
      <div className="grow shrink basis-0 self-stretch px-14 flex-col justify-center items-center inline-flex">
        <div className="pb-5 flex-col justify-start items-start flex">
          <div className="h-8 px-2 justify-start items-start inline-flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="text-2xl font-semibold leading-loose">
                Our Achievements
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full overflow-hidden">
          <div className="flex overflow-hidden w-full justify-start items-start">
            <div className="relative flex flex-row flex-nowrap justify-start py-2 w-full overflow-hidden">
              <div className="flex w-auto shrink-0 justify-center gap-2 items-center animate-looping-tag css-hxfist">
                {ourAchievements.map((achievement, index) => (
                  <div
                    className=" w-auto h-16 justify-start items-center gap-1 inline-flex"
                    key={index}
                  >
                    <Image
                      height={64}
                      src={achievement.img}
                      alt={achievement.title}
                    />
                    <div className=" min-w-32 flex-col justify-center items-start inline-flex">
                      <div className="text-white text-base font-semibold">
                        {achievement.title}
                      </div>
                      <div className="text-white text-xs font-normal">
                        {achievement.pos}
                        <br />
                        {achievement.division}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full inset-0 bg-gradient-to-l from-[#000000] from-0% to-transparent to-5% absolute"></div>
              <div className="w-full inset-0 bg-gradient-to-r from-[#000000] from-0% to-transparent to-5% absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
