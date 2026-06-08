"use client";

import { AlarmCategory } from "@api/domain/alarm";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import AlarmHeader from "./alarmHeader/alarmHeader";
import AlarmList from "./alarmList/alarmList";
import AlarmToggle from "./alarmToggle/alarmToggle";

function AlarmContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = (searchParams.get("category") as AlarmCategory) || "MAGAZINE";

  const handleChangeCategory = (newCategory: AlarmCategory) => {
    router.replace(`/alarm?category=${newCategory}`);
  };

  return (
    <div>
      <AlarmHeader />
      <div style={{ marginTop: "6.4rem" }}>
        <AlarmToggle selectedCategory={category} onChangeCategory={handleChangeCategory} />
        <AlarmList category={category} />
      </div>
    </div>
  );
}

export default function Alarm() {
  return (
    <Suspense fallback={null}>
      <AlarmContent />
    </Suspense>
  );
}
