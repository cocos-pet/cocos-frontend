import * as React from "react";
import type { SVGProps } from "react";
const SvgIcChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 21 21"
    {...props}
  >
    <path
      stroke="#222"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13 15.5-5-5 5-5"
    />
  </svg>
);
export default SvgIcChevronLeft;
