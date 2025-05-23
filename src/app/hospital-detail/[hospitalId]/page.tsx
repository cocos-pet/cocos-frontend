"use client";
import { useParams } from "next/navigation";
import HospitalHeader from "./_component/HospitalImg/HospitalImg";
import Info from "./_component/Info/Info";
import Selection from "./_component/Selection/Selection";
import { useGetHospitalDetail } from "@api/domain/review/hospital-detail/hook";
import { Suspense } from "react";

export default function HospitalDetailPage() {
  const params = useParams();
  const hospitalId = params?.hospitalId;

  if (!hospitalId || typeof hospitalId !== "string") {
    return;
  }

  const hospitalIdNumber = Number.parseInt(hospitalId, 10);
  if (Number.isNaN(hospitalIdNumber)) {
    return <div>잘못된 병원 ID입니다.</div>;
  }

  const { data, isLoading, error } = useGetHospitalDetail(hospitalIdNumber);

  if (isLoading) return <Suspense />;
  if (error) {
    return <div>에러가 발생했습니다: {error.message}</div>;
  }
  if (!data) return <div>데이터가 없습니다.</div>;

  return (
    <div>
      <HospitalHeader image={data.image || ""} />
      <Info name={data.name} phoneNumber={data.phoneNumber} />
      <Selection />
    </div>
  );
}
