import * as React from "react";
import type { SVGProps } from "react";
const SvgIcBaseProfileImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 49"
    {...props}
  >
    <rect width={47} height={47} x={0.5} y={1} fill="#F6F6F6" rx={23.5} />
    <rect width={47} height={47} x={0.5} y={1} stroke="#F0F0F0" rx={23.5} />
    <path
      stroke="#9D9D9D"
      strokeLinecap="round"
      strokeWidth={1.63}
      d="M13.252 31.463c2.566 1.603 7.403 1.135 8.976-2.85"
    />
    <circle
      cx={4.568}
      cy={4.568}
      r={3.753}
      fill="#CACACA"
      stroke="#9D9D9D"
      strokeWidth={1.63}
      transform="matrix(-1 0 0 1 13.125 22.006)"
    />
    <circle
      cx={1.467}
      cy={1.467}
      r={1.467}
      fill="#9D9D9D"
      transform="matrix(-1 0 0 1 19.838 19.024)"
    />
    <circle
      cx={1.467}
      cy={1.467}
      r={1.467}
      fill="#9D9D9D"
      transform="matrix(-1 0 0 1 12.237 17.555)"
    />
  </svg>
);
export default SvgIcBaseProfileImage;
