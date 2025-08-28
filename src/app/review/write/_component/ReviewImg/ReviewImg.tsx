import { IcAddphoto } from "@asset/svg/index";
import { useFormContext } from "react-hook-form";
import { ReviewFormData } from "@app/review/write/page";
import * as styles from "./ReviewImg.style.css";
import { useRef } from "react";
import ImageCover from "@shared/component/ImageCover/ImageCover";

interface ReviewImgProps {
  setImageNames: React.Dispatch<React.SetStateAction<string[]>>;
  setUploadedImageForms: React.Dispatch<React.SetStateAction<FormData[]>>;
}

const ReviewImg = ({ setImageNames, setUploadedImageForms }: ReviewImgProps) => {
  const { watch, setValue } = useFormContext<ReviewFormData>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const images = watch("images");

  // 이미지 추가
  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 파일 이름 저장
    setImageNames((prev) => [...prev, file.name]);

    // FormData 저장 (S3 업로드용)
    const formData = new FormData();
    formData.append("file", file);
    setUploadedImageForms((prev) => [...prev, formData]);

    // 미리보기 URL 저장 (Form 상태 반영)
    const previewUrl = URL.createObjectURL(file);
    setValue("images", [...images, previewUrl]);
  };

  // 이미지 삭제
  const handleDeleteImage = (index: number) => {
    setValue(
      "images",
      images.filter((_, i) => i !== index),
    );
    setImageNames((prev) => prev.filter((_, i) => i !== index));
    setUploadedImageForms((prev) => prev.filter((_, i) => i !== index));
  };

  // 파일 선택창 열기
  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.align}>
        <h2 className={styles.title}>사진 첨부</h2>
        <span className={styles.optional}>(선택)</span>
      </div>
      <div className={styles.imgLayout}>
        <div className={styles.imgBox}>
          <IcAddphoto style={{ width: 104, height: 104, cursor: "pointer" }} onClick={handleFileUploadClick} />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleAddImage}
            style={{ display: "none" }}
          />
          {images.map((src, id) => (
            <div key={id}>
              <ImageCover imageId={id} imageSrc={src} onDeleteClick={() => handleDeleteImage(id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewImg;
