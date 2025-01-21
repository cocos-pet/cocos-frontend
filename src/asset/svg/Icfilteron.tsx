import * as React from "react";
import type { SVGProps } from "react";
const SvgIcfilteron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="#43D6FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7" />
      <path
        strokeMiterlimit={10}
        d="M15.57 18.5v-3.9M15.57 7.45V5.5M15.57 12.65a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2M8.43 18.5v-1.95M8.43 9.4V5.5M8.43 16.55a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2"
      />
    </g>
  </svg>
);
export default SvgIcfilteron;
