"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import HospitalImage from "./_component/HospitalImage";
import HospitalInfo from "./_component/HospitalInfo";
import Selection from "./_component/Selection";
import * as styles from "./style.css";

export default function HospitalDetailPage() {
  const { hospitalId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/dev/hospitals/${hospitalId}`)
      .then(res => res.json())
      .then(res => setData(res.data));
  }, [hospitalId]);

  if (!data) return <div>로딩중...</div>;

  return (
    <div className={styles.container}>
      <HospitalImage image={data.image} />
      <HospitalInfo name={data.name} phoneNumber={data.phoneNumber} />
      <Selection data={data} />
    </div>
  );
}
