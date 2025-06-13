import * as React from "react";
import type { SVGProps } from "react";
const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 23"
    {...props}
  >
    <path
      stroke="#222"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 11.5a8 8 0 0 1-8 8m8-8a8 8 0 0 0-8-8m8 8h2m-10 8a8 8 0 0 1-8-8m8 8v2m-8-10a8 8 0 0 1 8-8m-8 8H1m10-8v-2m3 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgIcon;
