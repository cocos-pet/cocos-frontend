import * as styles from "./Radio.css";

type RadioProps = {
  value: number;
  checked: boolean;
  onChange: (value: number ) => void;
};

const Radio = ({ value, checked, onChange }: RadioProps) => {
  return (
    <input type="radio" className={styles.radio} value={value} checked={checked} onChange={() => onChange(value)} />
  );
};

export default Radio;
