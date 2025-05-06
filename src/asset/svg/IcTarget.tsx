import type { SVGProps } from "react";

const SvgIcTarget = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <path fill="#222" d="M0 0h20v20H0z" />
  </svg>
);
export default SvgIcTarget;
