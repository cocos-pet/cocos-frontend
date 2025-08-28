import Image, { ImageProps } from "next/image";
import React from "react";
import { sizeOfRem } from "@style/global.css";

type sizeType = `${number}rem` | `${number}%`;

interface LazyImageProps extends Omit<ImageProps, "width" | "height"> {
  width: sizeType;
  height: sizeType;
}

export default function LazyImage(props: LazyImageProps) {
  const { width, height, ...rest } = props;
  const isPercent = width.includes("%") || height.includes("%");

  if (isPercent) {
    return (
      <div style={{ position: "relative", width, height }}>
        <Image fill {...rest} />
      </div>
    );
  }

  const widthPx = Number(width.replace("rem", "")) * sizeOfRem;
  const heightPx = Number(height.replace("rem", "")) * sizeOfRem;
  return <Image width={widthPx} height={heightPx} style={{ width, height }} {...rest} />;
}
