import * as React from "react";
import type { SVGProps } from "react";
const SvgIcoSkeleton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={76}
    height={77}
    fill="none"
    {...props}
  >
    <rect width={76} height={76} y={0.5} fill="#F0F0F0" rx={8} />
  </svg>
);
export default SvgIcoSkeleton;
