import * as React from "react";
import type { SVGProps } from "react";
const SvgIcPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 21 21"
    {...props}
  >
    <path
      stroke="#BEBEBE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.5 4.667v11.666M4.667 10.5h11.667"
    />
  </svg>
);
export default SvgIcPlus;
