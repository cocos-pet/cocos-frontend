"use client";

import MoreReview from "./MoreReview/MoreReview";
import { useParams } from "next/navigation";

export default function MoreReviewPage() {
  const params = useParams<{ hospitalId: string }>();
  const hospitalId = params?.hospitalId ? Number(params.hospitalId) : 0;

  if (hospitalId === 0 || Number.isNaN(hospitalId)) return null;

  return <MoreReview hospitalId={hospitalId} />;
}
