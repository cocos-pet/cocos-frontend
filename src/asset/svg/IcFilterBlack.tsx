import type { SVGProps } from "react";

const SvgIcFilterBlack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" {...props}>
    <path
      stroke="#222"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.547 18.333h5c4.166 0 5.833-1.666 5.833-5.833v-5c0-4.167-1.667-5.833-5.833-5.833h-5c-4.167 0-5.834 1.666-5.834 5.833v5c0 4.167 1.667 5.833 5.834 5.833"
    />
    <path
      stroke="#222"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.022 15.417v-3.25M13.022 6.208V4.583M13.022 10.542a2.167 2.167 0 1 0 0-4.334 2.167 2.167 0 0 0 0 4.334M7.072 15.417v-1.625M7.072 7.833v-3.25M7.072 13.792a2.167 2.167 0 1 0 0-4.334 2.167 2.167 0 0 0 0 4.334"
    />
  </svg>
);
export default SvgIcFilterBlack;
