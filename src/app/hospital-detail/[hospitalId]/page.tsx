"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import HospitalHeader from "./_component/HospitalImg/HospitalImg";
import Info from "./_component/Info/Info";
import Selection from "./_component/Selection/Selection";

interface HospitalDetail {
    name: string;
    phoneNumber: string;
    tags: string;
    introduction: string;
    address: string;
    image: string;
  }
  

export default function HospitalDetailPage() {
  const { hospitalId } = useParams();
  const [data, setData] = useState<HospitalDetail | null>(null);

  useEffect(() => {
    fetch(`/api/dev/hospitals/${hospitalId}`)
      .then(res => res.json())
      .then(res => setData(res.data));
  }, [hospitalId]);

  if (!data) return <div>로딩중...</div>;

  return (
    <div className={styles.container}>
      <HospitalHeader />
      <Info name={data.name} phoneNumber={data.phoneNumber} />
      <Selection />
    </div>
  );
}
