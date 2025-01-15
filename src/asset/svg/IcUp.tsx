import * as React from "react";
import type { SVGProps } from "react";
const SvgIcUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#717171"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.023 12.5-5-5-5 5"
    />
  </svg>
);
export default SvgIcUp;
