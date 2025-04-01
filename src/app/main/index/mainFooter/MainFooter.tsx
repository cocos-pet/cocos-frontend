"use client";

import Link from "next/link";
import * as styles from "./MainFooter.css";
import {IcCocos} from "@asset/svg";

const MainFooter = () => {
  return (
    <div className={styles.footerContainer}>
      <IcCocos />
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
