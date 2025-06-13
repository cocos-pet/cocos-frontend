import * as React from "react";
import type { SVGProps } from "react";
const SvgIcRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 21 20"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.59 15 5-5-5-5"
    />
  </svg>
);
export default SvgIcRightArrow;
