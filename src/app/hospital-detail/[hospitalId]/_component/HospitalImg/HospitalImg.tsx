import * as styles from "./HospitalImg.css";
import hospital_none from "@asset/image/hospital_none.png";
import Image from "next/image";

interface HospitalHeaderProps {
  image: string;
}

export default function HospitalHeader({ image }: HospitalHeaderProps) {
  return (
    <div className={styles.hospitalHeaderContainer}>
      <Image src={image || hospital_none} alt="병원 이미지" className={styles.hospitalImage} />
    </div>
  );
}
