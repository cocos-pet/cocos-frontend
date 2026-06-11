"use client";

import { AlarmCategory } from "@api/domain/alarm";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import AlarmHeader from "./alarmHeader/alarmHeader";
import AlarmList from "./alarmList/alarmList";
import AlarmToggle from "./alarmToggle/alarmToggle";
import * as styles from "./page.css";

const ALARM_CATEGORIES: AlarmCategory[] = ["MAGAZINE", "MY"];

function AlarmContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const rawCategory = searchParams.get("category");
  const category: AlarmCategory =
    ALARM_CATEGORIES.includes(rawCategory as AlarmCategory) ? (rawCategory as AlarmCategory) : "MAGAZINE";

  const handleChangeCategory = (newCategory: AlarmCategory) => {
    router.replace(`/alarm?category=${newCategory}`);
  };

  return (
    <div>
      <AlarmHeader />
      <div className={styles.contentWrapper}>
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
