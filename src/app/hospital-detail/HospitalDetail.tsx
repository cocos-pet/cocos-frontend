"use client";

// import * as styles from "./HospitalDetail.css";
import HospitalHeader from "./[hospitalId]/_component/HospitalImg/HospitalImg";
import Info from "./[hospitalId]/_component/Info/Info";
import Selection from "./[hospitalId]/_component/Selection/Selection";

export default function HospitalDetail() {
  return (
    <div>
      <HospitalHeader />
      <Info />
      <Selection />
    </div>
  );
}
