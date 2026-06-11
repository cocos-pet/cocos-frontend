"use client";
import { IcLeftarrow } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { PATH } from "@route/path";
import { useRouter } from "next/navigation";
import * as styles from "./alarmHeader.css";

export default function AlarmHeader() {
  const router = useRouter();

  return (
    <div className={styles.headerContainer}>
      <HeaderNav
        leftIcon={<IcLeftarrow width={20} height={20} />}
        centerContent="알림"
        onLeftClick={() => router.push(PATH.MAIN)}
      />
    </div>
  );
}
