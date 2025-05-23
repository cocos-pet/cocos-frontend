import Image from "next/image";
import { IcAddphoto } from "@asset/svg/index";
import { useFormContext } from "react-hook-form";
import { ReviewFormData } from "@app/review/write/page";
import * as styles from "./ReviewImg.style.css";

const ReviewImg = () => {
  const { watch, setValue } = useFormContext<ReviewFormData>();

  const images = watch("images");

  const handleAddImage = () => {
    const newImage = "/nicknameCoco.png"; // ⚠️ 목데이터 URL (API 연동 시 변경)
    setValue("images", [...images, newImage]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.align}>
        <h2 className={styles.title}>사진 첨부</h2>
        <span className={styles.optional}>(선택)</span>
      </div>
      <div className={styles.imgLayout}>
        <div className={styles.imgBox}>
          <IcAddphoto style={{ width: 104, height: 104 }} onClick={handleAddImage} />
          {images.map((src, id) => (
            <Image
              key={id}
              src={src}
              alt={`uploaded-img-${id}`}
              width={104}
              height={104}
              style={{ backgroundColor: "blue" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewImg;
