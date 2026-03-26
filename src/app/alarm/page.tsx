"use client";

import { AlarmCategory } from "@api/domain/alarm";
import { useState } from "react";
import AlarmHeader from "./alarmHeader/alarmHeader";
import AlarmList from "./alarmList/alarmList";
import AlarmToggle from "./alarmToggle/alarmToggle";

export default function Alarm() {
  const [selectedCategory, setSelectedCategory] = useState<AlarmCategory>("MAGAZINE");

  return (
    <div>
      <AlarmHeader />
      <AlarmToggle selectedCategory={selectedCategory} onChangeCategory={setSelectedCategory} />
      <AlarmList category={selectedCategory} />
    </div>
  );
}
