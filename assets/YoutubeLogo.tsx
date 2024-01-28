import Link from "next/link";
import React from "react";

const YoutubeLogo = ({ height }: { height: string }) => {
  return (
    <svg
      width="100%"
      height={height}
      viewBox="0 0 28 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M26.3921 3.9375C26.1431 2.56299 24.9565 1.56201 23.5796 1.24951C21.519 0.8125 17.7056 0.5 13.5796 0.5C9.45605 0.5 5.58154 0.8125 3.51855 1.24951C2.14404 1.56201 0.955078 2.49951 0.706055 3.9375C0.45459 5.5 0.205566 7.6875 0.205566 10.5C0.205566 13.3125 0.45459 15.5 0.76709 17.0625C1.01855 18.437 2.20508 19.438 3.57959 19.7505C5.76709 20.1875 9.51709 20.5 13.6431 20.5C17.769 20.5 21.519 20.1875 23.7065 19.7505C25.0811 19.438 26.2676 18.5005 26.519 17.0625C26.7681 15.5 27.0806 13.249 27.144 10.5C27.0171 7.6875 26.7046 5.5 26.3921 3.9375ZM10.2056 14.875V6.125L17.8301 10.5L10.2056 14.875Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default YoutubeLogo;
