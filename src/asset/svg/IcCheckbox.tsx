import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  checked?: boolean;
}

const SvgIcCheckbox = ({ checked = false, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      {checked ? (
        <>
          <path
            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
            fill="#14B5F0"
            stroke="#14B5F0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <>
          <path
            stroke="#14B5F0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
          />
          <path
            stroke="#14B5F0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m7.75 12 2.83 2.83 5.67-5.66"
          />
        </>
      )}
    </svg>
  );
};

export default SvgIcCheckbox;