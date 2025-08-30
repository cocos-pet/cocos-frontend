import * as styles from "./HospitalImg.css";
import hospital_none from "@asset/image/hospital_none.png";
import Image from "next/image";
import { IcChevronLeft } from "@asset/svg";
import { useRouter } from "next/navigation";

interface HospitalHeaderProps {
  image: string;
}

export default function HospitalHeader({ image }: HospitalHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={styles.hospitalHeaderContainer}>
      <button onClick={handleBack} className={styles.backButton}>
        <IcChevronLeft stroke="white" />
      </button>
      <Image
        src={image || hospital_none}
        alt="병원 이미지"
        className={styles.hospitalImage}
      />
    </div>
  );
}
