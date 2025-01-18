import * as React from "react";
import type { SVGProps } from "react";
const SvgIcEditPen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 17.167H18m-15 0h1.395c.408 0 .612 0 .804-.046q.256-.062.482-.2c.168-.103.312-.247.6-.535L16.75 5.916a1.768 1.768 0 1 0-2.5-2.5L3.781 13.887c-.288.288-.432.432-.535.6q-.139.226-.2.482C3 15.16 3 15.364 3 15.771z"
    />
  </svg>
);
export default SvgIcEditPen;
