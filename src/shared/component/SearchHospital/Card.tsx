// 병원 정보 카드
import * as styles from "./Card.css";
import Image from "next/image";
import nicknameCoco from "@asset/image/nicknameCoco.png";
import Radio from "@common/component/Radio/Radio";
import LazyImage from "@common/component/LazyImage";

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
      <div className={styles.box}>
        <Radio value={id} checked={selected} onChange={onSelect} />
        <div className={styles.infoLayout}>
          <span className={styles.name}>{name}</span>
          <span className={styles.address}>{address}</span>
        </div>
      </div>
      <LazyImage
        src={imgSrc ?? nicknameCoco}
        alt="hospital-exterior"
        className={styles.img}
        width="7.6rem"
        height="7.6rem"
      />
    </div>
  );
};

export default Card;
