import type { SVGProps } from "react";
const SvgIcSearchFillter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke="#717171"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
    />
    <path
      stroke="#717171"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.57 18.5v-3.9M15.57 7.45V5.5M15.57 12.65a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2M8.43 18.5v-1.95M8.43 9.4V5.5M8.43 16.55a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2"
    />
  </svg>
);
export default SvgIcSearchFillter;
