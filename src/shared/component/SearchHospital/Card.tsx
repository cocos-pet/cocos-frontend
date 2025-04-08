// 병원 정보 카드
import * as styles from "./Card.css";
import Image from "next/image";
import nicknameCoco from "@asset/image/nicknameCoco.png";
import Radio from "@common/component/Radio/Radio";

type CardProps = {
  id: number;
  name: string;
  address: string;
  selected: boolean;
  onSelect: (id: number) => void;
};

const Card = ({ id, name, address, selected, onSelect }: CardProps) => {
  return (
    <div className={styles.wrapper}>
      <Radio value={id} checked={selected} onChange={onSelect} />
      <div className={styles.infoLayout}>
        <span className={styles.name}>{name}</span>
        <span className={styles.address}>{address}</span>
      </div>
      <Image src={nicknameCoco} alt="hospital-exterior" className={styles.img} />
    </div>
  );
};

export default Card;
