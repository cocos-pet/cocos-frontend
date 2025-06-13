"use client";

import Summary from "./Summary/Summary";
import RecentView from "./RecentView/RecentView";
import { useParams } from "next/navigation";

const ReviewContent = () => {
  const params = useParams();
  const hospitalId = params?.hospitalId as string;

  if (!hospitalId) {
    return null;
  }

  return (
    <div>
      <Summary />
      {/* TODO: hospitalId 받아오기 */}
      <RecentView hospitalId={1} />
    </div>
  );
};

export default ReviewContent;
