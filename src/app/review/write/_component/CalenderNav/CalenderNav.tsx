import * as styles from "./CalenderNav.style.css";
import { IcCalenderLeft, IcCalenderRight } from "@asset/svg";
import { NavProps } from "react-day-picker";

interface CalenderNavProps extends NavProps {
  currentMonth: Date;
}

const CalenderNav = ({ onPreviousClick, onNextClick, currentMonth }: CalenderNavProps) => {
  const today = new Date();

  return (
    <div className={styles.captionWrapper}>
      <button onClick={(e) => onPreviousClick?.(e)} type="button">
        <IcCalenderLeft width={24} height={24} />
      </button>
      <span className={styles.caption}>{`${currentMonth.getFullYear()}.${String(currentMonth.getMonth() + 1)}`}</span>
      <button
        onClick={(e) => {
          const nextMonth = new Date(currentMonth);
          nextMonth.setMonth(currentMonth.getMonth() + 1);
          if (nextMonth <= today) {
            onNextClick?.(e);
          }
        }}
        type="button"
      >
        <IcCalenderRight width={24} height={24} />
      </button>
    </div>
  );
};

export default CalenderNav;
