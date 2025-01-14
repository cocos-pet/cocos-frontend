import * as React from "react";
import type { SVGProps } from "react";
const SvgIcoMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#717171"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.25 10h.009M10 10h.009m3.741 0h.009M10 17.5a7.5 7.5 0 1 0-6.951-4.68c.067.167.101.25.116.318.015.066.02.114.02.182 0 .069-.012.144-.037.294l-.494 2.965c-.052.31-.078.466-.03.578.042.099.12.177.219.219.112.048.267.022.578-.03l2.965-.494c.15-.025.225-.037.294-.037s.117.005.183.02c.067.015.15.049.317.117.87.353 1.823.548 2.82.548M6.667 10a.417.417 0 1 1-.834 0 .417.417 0 0 1 .834 0m3.75 0a.417.417 0 1 1-.833 0 .417.417 0 0 1 .833 0m3.75 0a.417.417 0 1 1-.833 0 .417.417 0 0 1 .833 0"
    />
  </svg>
);
export default SvgIcoMessage;
