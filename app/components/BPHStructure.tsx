'use client'; // Ensure this is at the top

import React from 'react';
import Image from 'next/image';

const BPHStructure = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    position: string;
    image: string;
  }[] | null;
}) => {
  return (
    <>
      {items?.map((item) => (
        <div key={item.id} className="relative h-[120px] w-[120px]">
          <Image
            src={item.image}
            alt={item.name}
            layout="fill"
            className="rounded-full border border-white object-cover"
          />
        </div>
      ))}
    </>
  );
};

export default BPHStructure;
