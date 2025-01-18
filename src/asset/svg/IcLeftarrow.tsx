
import type { SVGProps } from "react";
const SvgIcLeftarrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#ic_leftarrow_svg__a)">
      <path
        stroke="#222"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 17-5-5 5-5"
      />
    </g>
    <defs>
      <clipPath id="ic_leftarrow_svg__a">
        <rect width={24} height={24} x={0.5} fill="#fff" rx={12} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcLeftarrow;
