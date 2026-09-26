"use client";

import Link from "next/link";
import * as styles from "./MainFooter.css.ts";
import { IcChevronRight, IcCocos } from "@asset/svg";
import { Button } from "@common/component/Button";
import { EXTERNAL_URL } from "@shared/constant/externalUrl";

const MainFooter = () => {
  const handleOpenInquiry = () => {
    window.open(EXTERNAL_URL.KAKAO_INQUIRY_CHANNEL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.footerContainer}>
      <IcCocos />
      <Button
        width="fit-content"
        label="1:1 문의하기"
        rightIcon={<IcChevronRight width={20} height={20} stroke="#fff" />}
        onClick={handleOpenInquiry}
      />
      <div className={styles.footerDetail}>
        <div>
          <Link
            href="https://luminous-chard-386.notion.site/1839107603148050823fd83bb65c82fe"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerDetail}
          >
            이용약관 및 개인정보 취급방침
          </Link>
        </div>
        <div>
          <Link
            href="https://luminous-chard-386.notion.site/1839107603148003bf7cdc788b50285e"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerDetail}
          >
            리뷰운영정책
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
