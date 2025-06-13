import * as React from "react";
import type { SVGProps } from "react";
const SvgIcChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      stroke="#222"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6 9.5 6 6 6-6"
    />
  </svg>
);
export default SvgIcChevronDown;
