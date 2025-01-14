import type { SVGProps } from "react";

type SvgIcDeleteProps = SVGProps<SVGSVGElement> & {
  color?: string;
};

const SvgIcDelete = ({ color = "#14B5F0", ...props }: SvgIcDeleteProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <title>SvgIcDelete</title>
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 7 7 17M7 7l10 10" />
  </svg>
);
export default SvgIcDelete;
