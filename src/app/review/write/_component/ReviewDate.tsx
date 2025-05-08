import * as styles from "./ReviewDate.style.css";
import { useFormContext } from "react-hook-form";
import { useState, useMemo } from "react";
import { ReviewFormData } from "../page";

import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import { ko } from "date-fns/locale";
import CalenderNav from "./CalenderNav";

// 서버 제출용 날짜 데이터 포멧팅
const formatDate = (date: Date) => {
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(
    2,
    "0",
  )}`;
};

// 데이 피커용 Date 객체
const parseDateString = (dateString: string): Date | undefined => {
  if (!dateString) return undefined;
  const [year, month, day] = dateString.split(".").map(Number);
  return new Date(year, month - 1, day);
};

const ReviewDate = () => {
  const { watch, setValue } = useFormContext<ReviewFormData>();
  const selectedDateString = watch("date");

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today);

  const selectedDate = useMemo(() => parseDateString(selectedDateString), [selectedDateString]);

  if (!selectedDateString) {
    setValue("date", formatDate(today));
  }

  // 가장 최근 달인 경우, 다음달 버튼 비활성화
  const handleMonthChange = (month: Date) => {
    if (
      month.getFullYear() > today.getFullYear() ||
      (month.getFullYear() === today.getFullYear() && month.getMonth() > today.getMonth())
    ) {
      return;
    }
    setCurrentMonth(month);
  };

  return (
    <div>
      <section>
        <span className={styles.questionStyle}>방문한 날짜가 언젠가요?</span>
        <span className={styles.starStyle}>*</span>
      </section>
      <section className={styles.calenderWrapper}>
        <DayPicker
          locale={ko} 
          showOutsideDays 
          animate 
          mode="single"
          selected={selectedDate}
          onSelect={(day) => {
            if (day) {
              setValue("date", formatDate(day));
            }
          }}
          disabled={{ after: today }}
          onMonthChange={handleMonthChange}
          classNames={{
            month_caption: styles.hidden, 
            weekday: styles.weekdayHeader, 
            day: styles.day, 
            today: styles.today, 
          }}
          modifiers={{
            pastOutside: (date) =>
              date < today &&
              (date.getMonth() !== currentMonth.getMonth() || date.getFullYear() !== currentMonth.getFullYear()),
          }}
          modifiersClassNames={{
            selected: styles.daySelected, 
            pastOutside: styles.pastOutside, 
            disabled: styles.disabled, 
          }}
          components={{
            Nav: (navProps) => <CalenderNav {...navProps} currentMonth={currentMonth} />,
            Months: (props) => <div className={styles.calenderLayout}>{props.children}</div>,
          }}
        />
      </section>
    </div>
  );
};

export default ReviewDate;
