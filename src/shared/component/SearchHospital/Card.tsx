// 병원 정보 카드
import * as styles from "./Card.css";
import Image from "next/image";
// ⚠️ 추후 삭제할 이미지
import nicknameCoco from "@asset/image/nicknameCoco.png";
import Radio from "@common/component/Radio/Radio";

type CardProps = {
  id: number;
  name: string;
  address: string;
  selected: boolean;
  imgSrc?: string;
  onSelect: (id: number) => void;
};

const Card = ({ id, name, address, selected, imgSrc, onSelect }: CardProps) => {
  return (
    <div className={styles.wrapper({ selected })}>
      <Radio value={id} checked={selected} onChange={onSelect} />
      <div className={styles.infoLayout}>
        <span className={styles.name}>{name}</span>
        <span className={styles.address}>{address}</span>
      </div>
      <Image src={imgSrc ?? nicknameCoco} alt="hospital-exterior" className={styles.img} />
    </div>
  );
};

export default Card;
