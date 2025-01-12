import type { SVGProps } from "react";

const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <title>Chevron Down Icon</title>
    <g id="Icon/Normal/chevron-down">
      <path
        id="Icon"
        d="M6 9L12 15L18 9"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default SvgChevronDown;
