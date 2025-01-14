import * as React from "react";
import type { SVGProps } from "react";
const SvgIcPostImageSkeleton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={336}
    height={262}
    fill="none"
    {...props}
  >
    <rect width={335} height={262} x={0.5} fill="#F0F0F0" rx={8} />
  </svg>
);
export default SvgIcPostImageSkeleton;
