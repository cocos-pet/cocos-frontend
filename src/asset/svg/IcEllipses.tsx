
import type { SVGProps } from "react";
const SvgIcEllipses = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 22"
    {...props}
  >
    <g
      stroke="#222"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M11 11.875a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75M11 5.75A.875.875 0 1 0 11 4a.875.875 0 0 0 0 1.75M11 18a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75" />
    </g>
  </svg>
);
export default SvgIcEllipses;
