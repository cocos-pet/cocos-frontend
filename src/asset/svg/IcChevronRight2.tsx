import * as React from "react";
import type { SVGProps } from "react";

const SvgIcChevronRight2 = (props: SVGProps<SVGSVGElement>) => {
  const { stroke = "#717171", ...rest } = props;  // 기본 stroke 색상 설정

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21" {...rest}>
      <path
        stroke={stroke}  // stroke 속성 적용
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5.023 8 5 5 5-5"
      />
    </svg>
  );
};

export default SvgIcChevronRight2;