import * as React from "react";
import type { SVGProps } from "react";
const SvgIcRefresh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <g clipPath="url(#ic_refresh_svg__a)">
      <path
        stroke="#14B5F0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.7}
        d="M4.437 10.537s1.67-2.276 3.028-3.634a7.5 7.5 0 1 1-1.902 7.385m-1.126-3.75v-5m0 5h5"
      />
    </g>
    <defs>
      <clipPath id="ic_refresh_svg__a">
        <rect width={24} height={24} x={0.77} y={0.204} fill="#fff" rx={12} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcRefresh;
