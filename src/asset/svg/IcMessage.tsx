import * as React from "react";
import type { SVGProps } from "react";
const SvgIcMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#BEBEBE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.625 9h.008M9 9h.008m3.367 0h.008M9 15.75a6.75 6.75 0 1 0-6.256-4.212c.06.15.09.225.104.286a.7.7 0 0 1 .019.164c0 .062-.012.13-.034.265l-.445 2.668c-.046.28-.07.42-.026.52a.38.38 0 0 0 .196.197c.101.044.241.02.52-.026l2.669-.445c.135-.022.203-.034.265-.034.06 0 .105.005.164.019s.136.043.286.105c.783.318 1.64.493 2.538.493M6 9a.375.375 0 1 1-.75 0A.375.375 0 0 1 6 9m3.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m3.375 0A.375.375 0 1 1 12 9a.375.375 0 0 1 .75 0"
    />
  </svg>
);
export default SvgIcMessage;
