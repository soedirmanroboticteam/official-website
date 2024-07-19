'use client' //Client Side
import { rpTeam } from "@/lib/technicalSection/rpTeam";
import Image from 'next/image';

const RPSection = () => {
  return (
    <section className="w-3/4 flex flex-wrap md:flex-row justify-center items-center py-6">
        <div className="w-full text-center font-bold text-2xl md:text-4xl font-poppins pb-8">Biantara Racing Plane</div>
        {rpTeam.map((member, index) => (
            <div key={index} className="w-full lg:w-1/4 md:w-1/2 pb-8 md:pb-16 px-5 flex flex-col">
              <div className="relative h-[120px] w-[120px] mx-auto">
                  <Image
                  src={member.img}
                  alt={member.name}
                  layout="fill"
                  className="rounded-full border border-white"
                  />
              </div>
              <div className="h-12 md:h-16 lg:h-20 flex items-center justify-center">
                <div className="text-lg md:text-xl lg:text-xl text-center font-bold">{member.name}</div>
              </div>
              <div className="h-8 md:h-12 flex items-center justify-center">
                <div className="text-xs md:text-sm lg:text-base text-center">{member.division}</div>
              </div>
            </div>
        ))}
    </section>
  );
};

export default RPSection;

