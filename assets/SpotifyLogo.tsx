import React from "react";

const SpotifyLogo = ({ height }: { height: number }) => {
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
          d="M19.8938 11.0815C15.865 8.68904 9.21875 8.46873 5.37125 9.63623C4.75375 9.82248 4.10125 9.47495 3.91375 8.8562C3.72625 8.2387 4.075 7.58618 4.6925 7.39868C9.10875 6.05743 16.4488 6.31607 21.0875 9.06982C21.6425 9.39982 21.825 10.1176 21.495 10.6726C21.1675 11.2276 20.4475 11.4115 19.8938 11.0815ZM19.7625 14.6252C19.48 15.084 18.88 15.2275 18.4212 14.9463C15.0625 12.8813 9.94 12.2837 5.96625 13.49C5.45 13.645 4.90625 13.355 4.75 12.84C4.595 12.325 4.885 11.781 5.4 11.6248C9.93875 10.2473 15.5825 10.9149 19.4413 13.2861C19.9 13.5674 20.0437 14.1677 19.7625 14.6252ZM18.2325 18.0286C18.0075 18.3961 17.5287 18.5124 17.1612 18.2874C14.2262 16.4936 10.5313 16.0888 6.18 17.0825C5.76125 17.1788 5.3425 16.916 5.2475 16.496C5.15125 16.0772 5.4125 15.6602 5.83375 15.564C10.595 14.4752 14.6787 14.9436 17.9737 16.9574C18.3412 17.1824 18.4575 17.6611 18.2325 18.0286ZM12.5 0C5.59625 0 0 5.59625 0 12.5C0 19.4037 5.59625 25 12.5 25C19.4037 25 25 19.4037 25 12.5C25 5.5975 19.4037 0 12.5 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default SpotifyLogo;
