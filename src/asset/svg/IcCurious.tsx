import * as React from "react";
import type { SVGProps } from "react";
const SvgIcCurious = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#ic_curious_svg__a)">
      <circle
        cx={8.949}
        cy={8.949}
        r={8.199}
        stroke="#717171"
        strokeWidth={1.5}
        transform="scale(-1 1)rotate(37.162 -2.088 -18.71)"
      />
      <path
        stroke="#717171"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7.885 7.866c0-2.775 4.23-2.542 4.23 0s-2.132 1.942-2.132 2.741v1.308"
      />
      <circle cx={10} cy={14.283} r={0.902} fill="#717171" />
    </g>
    <defs>
      <clipPath id="ic_curious_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcCurious;
