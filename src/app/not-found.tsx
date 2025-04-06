"use client";

import {useRouter} from "next/navigation";
import * as styles from "./notFound/NotFound.css";
import notFoundGraphic from "@asset/image/notFoundGraphic.png";
import {PATH} from "@route/path";
import Image from "next/image";
import {useEffect} from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // 5초 후 메인 페이지로 리다이렉트
    const timer = setTimeout(() => {
      router.push(PATH.MAIN);
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section className={styles.notFoundContainer}>
      <article className={styles.notFoundeWrapper}>
        <Image
          className={styles.notFoundImage}
          src={notFoundGraphic}
          alt="404"
          width={196}
          height={196}
        />
        <div className={styles.notFoundTextWrapper}>
          <h1 className={styles.nothingText}>앗, 이곳엔 아무것도 없어요</h1>
          <p
            className={styles.goHomeText}
            onClick={() => router.push(PATH.MAIN)}
          >
            홈으로 가기
          </p>
          <p style={{ fontSize: "14px", color: "#888", marginTop: "10px" }}>
            5초 후 자동으로 홈으로 이동합니다
          </p>
        </div>
      </article>
    </section>
  );
}
