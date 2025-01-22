import * as React from "react";
import type { SVGProps } from "react";
const SvgIcSymptom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <circle
      cx={4.954}
      cy={4.954}
      r={4.954}
      fill="#43D6FF"
      transform="scale(-1 1)rotate(37.162 -6.917 -14.688)"
    />
    <circle
      cx={5.446}
      cy={5.446}
      r={4.946}
      stroke="#555"
      transform="scale(-1 1)rotate(37.162 -5.937 -15.173)"
    />
    <mask id="ic_symptom_svg__a" fill="#fff">
      <rect
        width={2.47}
        height={5.157}
        rx={0.997}
        transform="scale(-1 1)rotate(37.162 -25.537 -14.074)"
      />
    </mask>
    <rect
      width={2.47}
      height={5.157}
      stroke="#555"
      strokeWidth={2}
      mask="url(#ic_symptom_svg__a)"
      rx={0.997}
      transform="scale(-1 1)rotate(37.162 -25.537 -14.074)"
    />
    <rect
      width={0.617}
      height={1.343}
      x={-0.06}
      y={0.433}
      stroke="#555"
      strokeWidth={0.617}
      rx={0.309}
      transform="scale(-1 1)rotate(37.162 -23.638 -11.807)"
    />
  </svg>
);
export default SvgIcSymptom;
