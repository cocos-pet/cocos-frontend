import * as React from "react";
import type { SVGProps } from "react";
const SvgIcUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 4"
    {...props}
  >
    <path
      fill="#14B5F0"
      d="M.75 2a2 2 0 0 1 2-2h20a2 2 0 1 1 0 4h-20a2 2 0 0 1-2-2"
    />
  </svg>
);
export default SvgIcUnderline;
