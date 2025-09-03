import * as styles from "@app/community/category/Category.css.ts";
import Image from "next/image";
import nocategory from "@asset/image/nocategory.png";
import FloatingBtn from "@design-system/FloatingBtn/Floating";
import { HTMLAttributes } from "react";

interface noDataType extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  onBtnClick?: () => void;
}

const NoData = ({ label = "아직 등록된 게시글이 없어요", onBtnClick, ...rest }: noDataType) => {
  return (
    <div className={styles.emptyContainer} {...rest}>
      <Image
        src={nocategory}
        alt="게시글 없음."
        width={276}
        height={155}
        style={{
          objectFit: "cover",
        }}
      />
      <h1>{label}</h1>
      <div className={styles.floatingBtnContainer}>{onBtnClick && <FloatingBtn onClick={onBtnClick} />}</div>
    </div>
  );
};

export default NoData;
