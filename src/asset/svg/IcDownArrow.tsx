import type { SVGProps } from "react";

const SvgIcDownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <mask
      id="ic_down_arrow_svg__a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path stroke="#222" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m5 7.5 5 5 5-5" />
    </mask>
    <g mask="url(#ic_down_arrow_svg__a)">
      <path fill="#222" d="M0 0h20v20H0z" />
    </g>
  </svg>
);
export default SvgIcDownArrow;
