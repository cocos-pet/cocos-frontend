import type { SVGProps } from "react";
const SvgIcDelete = ({
  stroke = "#fff",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.125}
      d="m15.375 6.502-8.75 8.75m0-8.75 8.75 8.75"
    />
  </svg>
);
export default SvgIcDelete;
