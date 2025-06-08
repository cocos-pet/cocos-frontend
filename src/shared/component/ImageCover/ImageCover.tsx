import { container, deleteButton, ghost, image } from "./ImageCover.css.ts";
import React from "react";
import { IcDeleteWhite } from "@asset/svg";

interface ImageSlideType {
  key?: string;
  imageId: number;
  imageSrc: string;
  onDeleteClick: (id: number) => void;
}

/**
 * 이미지 백그라운드에 그라디언트 적용 및 X 아이콘
 * @param key 삭제할 때 사용할 이미지 id
 * @param imageSrc
 * @param onDeleteClick
 * @constructor
 */

const ImageCover = ({ imageId, imageSrc, onDeleteClick }: ImageSlideType) => {
  return (
    <div className={container}>
      <IcDeleteWhite
        width={20}
        className={deleteButton}
        onClick={() => onDeleteClick(imageId)}
      />
      <img src={imageSrc} alt="이미지" className={image} />
      <div className={ghost} />
    </div>
  );
};

export default ImageCover;
