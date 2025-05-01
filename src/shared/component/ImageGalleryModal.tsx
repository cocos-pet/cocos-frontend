import React, { useEffect, useRef } from "react";
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
  // 스크롤 위치를 저장하기 위한 ref
  const scrollPositionRef = useRef(0);

  // 모달이 열릴 때 배경 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      // 현재 스크롤 위치 저장
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // 모달이 닫힐 때 스크롤 위치 복원
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollPositionRef.current);
    }

    return () => {
      // 컴포넌트 언마운트 시 스타일 초기화
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // 더블클릭 이벤트 방지
  const preventDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

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
        userSelect: "none", // 텍스트 선택 방지
        touchAction: "none", // 핀치 줌 방지
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
          padding: "1.6rem",
          display: "flex",
          justifyContent: "center", 
          alignItems: "center",
          color: "white",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "18px" }}>{`${currentIndex + 1}/${images.length}`}</div>
        <button
          onClick={onClose}
          style={{
            position: "absolute", // 절대 위치로 설정
            right: "2rem", // 오른쪽에 위치
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
          onDoubleClick={preventDoubleClick}
        >
          <Image
            src={images[currentIndex]}
            alt={`이미지 ${currentIndex + 1}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              pointerEvents: "none", // 이미지 상호작용 비활성화
            }}
            width={500}
            height={500}
            onClick={(e) => e.stopPropagation()} // 이미지 클릭이 모달 닫기로 이어지지 않도록
            onDoubleClick={preventDoubleClick} // 더블클릭 비활성화
            unoptimized // 이미지 최적화 비활성화로 일부 상호작용 방지
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
