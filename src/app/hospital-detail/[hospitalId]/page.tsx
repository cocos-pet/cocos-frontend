"use client";
import { useParams } from "next/navigation";
import HospitalHeader from "./_component/HospitalImg/HospitalImg";
import Info from "./_component/Info/Info";
import Selection from "./_component/Selection/Selection";
import { useGetHospitalDetail } from "@api/domain/review/hospital-detail/hook";
import { Suspense } from "react";
import Loading from "@design-system/Loading/Loading";

const LoadingFallback = () => <Loading height={80} />;

const HospitalContent = () => {
  const params = useParams();
  const hospitalId = params?.hospitalId;

  if (!hospitalId || typeof hospitalId !== "string") {
    return;
  }

  const hospitalIdNumber = Number.parseInt(hospitalId, 10);
  if (Number.isNaN(hospitalIdNumber)) {
    return <div>잘못된 병원 ID입니다.</div>;
  }

  const { data } = useGetHospitalDetail(hospitalIdNumber);

  return (
    <div>
      <HospitalHeader image={data?.image || ""} />
      <Info name={data?.name || ""} phoneNumber={data?.phoneNumber || ""} />
      <Selection hospitalId={hospitalIdNumber} />
    </div>
  );
};

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

  return (
    <Suspense fallback={<LoadingFallback />}>
      <HospitalContent />
    </Suspense>
  );
}
