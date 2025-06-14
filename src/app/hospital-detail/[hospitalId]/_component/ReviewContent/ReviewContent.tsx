"use client";

import Summary from "./Summary/Summary";
import RecentView from "./RecentView/RecentView";
import { useParams } from "next/navigation";

const ReviewContent = () => {
  const params = useParams();
  const hospitalId = Number(params?.hospitalId as string);

  if (!hospitalId) {
    return null;
  }

  return (
    <div>
      <Summary />
      <RecentView hospitalId={hospitalId} />
    </div>
  );
};

export default ReviewContent;
