import * as React from "react";
import type { SVGProps } from "react";
const SvgIcOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 21 21"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.833 14.667 18 10.5m0 0-4.167-4.167M18 10.5H8M8 3H7c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C3 4.9 3 5.6 3 7v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.9 18 5.6 18 7 18h1"
    />
  </svg>
);
export default SvgIcOut;
