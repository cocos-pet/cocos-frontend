import * as React from "react";
import type { SVGProps } from "react";
const SvgIcoSkeleton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 76 77"
    {...props}
  >
    <rect width={76} height={76} y={0.5} fill="#F0F0F0" rx={8} />
  </svg>
);
export default SvgIcoSkeleton;
