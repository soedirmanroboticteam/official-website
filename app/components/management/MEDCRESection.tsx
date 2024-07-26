import { createClientBrowserServer } from "@/lib/supabase/server";
import React from "react";
import Image from "next/image";

const HRDSection = async () => {
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase
    .from("management")
    .select('*')
    .eq('division', 'Medcre')
    .order('id', { ascending: true });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="w-3/4 flex flex-wrap md:flex-row justify-center items-center py-6">
      <div className="w-full text-center font-bold text-2xl md:text-4xl font-poppins pb-8">Creative Media</div>
              {data && data.length ? (
                data.map((member, index) => (
                  <div key={index} className="w-full lg:w-1/4 md:w-1/2 pb-8 md:pb-16 px-5 flex flex-col">
                    <div className="relative h-[120px] w-[120px] mx-auto">
                      <Image
                        src={member.image_url}
                        alt={member.position}
                        layout="fill"
                        className="rounded-full border border-white"
                      />
                    </div>
                    <div className="h-12 md:h-16 lg:h-20 flex items-center justify-center">
                      <div className="text-lg md:text-xl lg:text-xl text-center font-bold">{member.name}</div>
                    </div>
                    <div className="h-8 md:h-12 flex items-center justify-center">
                      <div className="text-xs md:text-sm lg:text-base text-center">{member.position}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div>No data</div>
              )}
    </section>
  );
};

export default HRDSection;
