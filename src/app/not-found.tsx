"use client";

import { useRouter } from "next/navigation";
import * as styles from "./notFound/NotFound.css";
import notFoundGraphic from "@asset/image/notFoundGraphic.png";
import { PATH } from "@route/path";
import { useEffect, useState } from "react";
import LazyImage from "@common/component/LazyImage";

const REDIRECT_TIME = 5;

export default function NotFound() {
  const router = useRouter();
  const [restTime, setRestTime] = useState(REDIRECT_TIME);

  useEffect(() => {
    // 5초 후 메인 페이지로 리다이렉트
    const timer = setInterval(() => {
      setRestTime((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push(PATH.MAIN);
    }, 900 * REDIRECT_TIME);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <section className={styles.notFoundContainer}>
      <article className={styles.notFoundeWrapper}>
        <LazyImage className={styles.notFoundImage} src={notFoundGraphic} alt="404" width="29.2rem" height="16.5rem" />
        <div className={styles.notFoundTextWrapper}>
          <h1 className={styles.nothingText}>앗, 이곳엔 아무것도 없어요</h1>
          <p className={styles.goHomeText} onClick={() => router.push(PATH.MAIN)}>
            홈으로 가기
          </p>
          <p style={{ fontSize: "14px", color: "#888", marginTop: "10px" }}>
            {restTime}초 후 자동으로 홈으로 이동합니다
          </p>
        </div>
      </article>
    </section>
  );
}
