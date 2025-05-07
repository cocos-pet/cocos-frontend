import * as styles from "./HospitalImg.css";
import hospital_none from "@asset/image/hospital_none.png";
import Image from "next/image";
const HospitalImg= () => {
  return (
    <div className= {styles.hospitalHeaderContainer}>
        <Image src= {hospital_none} alt= "병원 이미지 없을 때 " className= {styles.hospitalImage} />
    </div>
  )
}

export default HospitalImg
