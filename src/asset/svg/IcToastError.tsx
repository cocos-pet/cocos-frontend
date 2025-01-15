import * as React from "react";
import type { SVGProps } from "react";
const SvgIcToastError = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={300}
    height={60}
    fill="none"
    {...props}
  >
    <g filter="url(#ic_toast_error_svg__a)">
      <g clipPath="url(#ic_toast_error_svg__b)">
        <path
          fill="#FDE9F4"
          d="M10 16a8 8 0 0 1 8-8h264a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8z"
        />
        <path
          fill="#F53D3D"
          d="M12 8a2 2 0 0 1 2 2v36a2 2 0 1 1-4 0V10a2 2 0 0 1 2-2"
        />
      </g>
    </g>
    <defs>
      <clipPath id="ic_toast_error_svg__b">
        <path
          fill="#fff"
          d="M10 16a8 8 0 0 1 8-8h264a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8z"
        />
      </clipPath>
      <filter
        id="ic_toast_error_svg__a"
        width={300}
        height={60}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_61_103" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_61_103"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgIcToastError;
