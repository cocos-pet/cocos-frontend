import type { SVGProps } from "react";

const SvgIcTarget = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <mask
      id="ic_target_svg__a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        stroke="#222"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.667 10A6.667 6.667 0 0 1 10 16.667M16.667 10A6.667 6.667 0 0 0 10 3.333M16.667 10h1.666M10 16.667A6.667 6.667 0 0 1 3.333 10M10 16.667v1.666M3.333 10A6.667 6.667 0 0 1 10 3.333M3.333 10H1.667M10 3.333V1.667M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
    </mask>
    <g mask="url(#ic_target_svg__a)">
      <path fill="#222" d="M0 0h20v20H0z" />
    </g>
  </svg>
);
export default SvgIcTarget;
