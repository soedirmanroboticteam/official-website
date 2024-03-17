import React from "react";

const LinkedinLogo = ({ height }: { height: number }) => {
  return (
    <svg
      width="100%"
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M25 25H20V16.2512C20 13.8512 18.9413 12.5122 17.0425 12.5122C14.9763 12.5122 13.75 13.9075 13.75 16.2512V25H8.75V8.75H13.75V10.5774C13.75 10.5774 15.3187 7.82471 18.8537 7.82471C22.39 7.82471 25 9.98263 25 14.4476V25ZM3.0525 6.15112C1.36625 6.15112 0 4.7737 0 3.07495C0 1.37745 1.36625 0 3.0525 0C4.7375 0 6.10374 1.37745 6.10374 3.07495C6.10499 4.7737 4.7375 6.15112 3.0525 6.15112ZM0 25H6.25V8.75H0V25Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default LinkedinLogo;
