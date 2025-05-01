import React, { useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ImageGalleryModalProps {
  isOpen: boolean;
  images: (StaticImageData | string)[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  // 모달이 열릴 때 배경 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      // 현재 스크롤 위치 저장
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // 모달이 닫힐 때 스크롤 위치 복원
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, Number.parseInt(scrollY || "0") * -1);
    }

    return () => {
      // 컴포넌트 언마운트 시 스타일 초기화
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={(e) => {
        // 모달 배경 클릭 시 닫기
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* 헤더 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          padding: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "18px" }}>{`${currentIndex + 1}/${images.length}`}</div>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      </div>

      {/* 이미지 영역 */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 이전 버튼 */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          style={{
            position: "absolute",
            left: "20px",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 1001,
          }}
        >
          &#10094;
        </button>

        {/* 이미지 */}
        <div
          style={{
            maxWidth: "90%",
            maxHeight: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={images[currentIndex]}
            alt={`이미지 ${currentIndex + 1}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
            width={500}
            height={500}
          />
        </div>

        {/* 다음 버튼 */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          style={{
            position: "absolute",
            right: "20px",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 1001,
          }}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageGalleryModal;
