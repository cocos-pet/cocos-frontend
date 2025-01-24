import * as React from "react";
import type { SVGProps } from "react";

type Props = {
  stroke?: string;
} & SVGProps<SVGSVGElement>;

const SvgIcDelete = ({ stroke, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={20}
    height={20}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 7 7 17M7 7l10 10"
    />
  </svg>
);
export default SvgIcDelete;
