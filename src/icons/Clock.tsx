import React from "react";

const Clock: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
    >
      <path
        d="M14.4001 25.6663C20.8434 25.6663 26.0667 20.443 26.0667 13.9997C26.0667 7.55635 20.8434 2.33301 14.4001 2.33301C7.95674 2.33301 2.7334 7.55635 2.7334 13.9997C2.7334 20.443 7.95674 25.6663 14.4001 25.6663Z"
        stroke="black"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4004 7V14L19.0671 16.3333"
        stroke="black"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Clock;
