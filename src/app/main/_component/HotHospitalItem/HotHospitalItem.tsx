import notFoundGraphic from "@asset/image/notFoundGraphic.png";
import { StaticImageData } from "next/image";
import * as styles from "./HotHospitalItem.css.ts";
import LazyImage from "@common/component/LazyImage.tsx";

interface HotHospitalItemProps {
  id: number;
  name?: string;
  address?: string;
  reviewCount?: number;
  imageSrc?: string | StaticImageData;
  onClick?: () => void;
}

/**
 * @description 가장 많이 찾는 병원 아이템
 * @param id 그 병원 순위
 * @param name 병원 이름
 * @param address 병원 주소
 * @param reviewCount 리뷰 수
 * @param imageSrc 병원 이미지
 * @param onClick 아이템 클릭 시 동작
 * @constructor
 */

const HotHospitalItem = ({
  id,
  name,
  address,
  reviewCount,
  imageSrc = notFoundGraphic,
  onClick,
}: HotHospitalItemProps) => {
  return (
    <div className={styles.hotHospital} onClick={onClick}>
      <div className={styles.hotHospitalContent}>
        <div className={styles.hotHospitalContentTop}>
          <div className={styles.hotHospitalId}>{id}</div>
          <div className={styles.hotHospitalName}>{name}</div>
        </div>
        <div className={styles.hotHospitalSub}>
          {address} · 리뷰수 {reviewCount}
        </div>
      </div>
      {/* 병원 이미지가 없을 경우를 대비하여 기본 이미지 설정 */}
      {typeof imageSrc !== "string" && !imageSrc ? (
        <LazyImage
          src={notFoundGraphic}
          alt={"병원 이미지"}
          className={styles.hotHospitalImage}
          height="7.6rem"
          width="7.6rem"
        />
      ) : (
        <LazyImage
          src={imageSrc}
          alt={"병원 이미지"}
          className={styles.hotHospitalImage}
          height="7.6rem"
          width="7.6rem"
        />
      )}
    </div>
  );
};

export default HotHospitalItem;
