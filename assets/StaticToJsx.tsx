import Image, { StaticImageData } from "next/image";
import React from "react";

const StaticToJsx = ({
  src,
  alt,
  height,
}: {
  src: StaticImageData;
  alt: string;
  height: number;
}) => {
  return <Image src={src} alt={alt} height={height} />;
};

export default StaticToJsx;
