import type { SVGProps } from "react";

const DEFAULT_FILL = "#E4E4E4";
const SELECTED_FILL = "#3DC4F5";

interface CheckboxProps extends SVGProps<SVGSVGElement> {
  isSelected?: boolean;
}

const SvgCheckbox = ({ isSelected = false, ...props }: CheckboxProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <g clipPath="url(#checkbox_svg__a)">
      <rect width={20} height={20} fill={isSelected ? SELECTED_FILL : DEFAULT_FILL} rx={4} />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.429}
        d="m5 9.57 4.286 4.286L15 7"
      />
    </g>
    <defs>
      <clipPath id="checkbox_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCheckbox;
