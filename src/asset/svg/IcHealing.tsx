import * as React from "react";
import type { SVGProps } from "react";
const SvgIcHealing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#43D6FF"
      stroke="#555"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.447 13.737a.8.8 0 0 1-.493 0c-1.152-.42-3.727-2.172-3.727-5.141 0-1.31.99-2.371 2.21-2.371.723 0 1.362.373 1.764.95.401-.577 1.045-.95 1.764-.95 1.22 0 2.21 1.06 2.21 2.371 0 2.97-2.575 4.721-3.728 5.141"
    />
    <path
      stroke="#555"
      strokeLinecap="round"
      d="M18.543 7.416c-.212 1.325-1.463 3.974-4.77 3.974M1.458 7.416c.211 1.325 1.462 3.974 4.769 3.974"
    />
  </svg>
);
export default SvgIcHealing;
