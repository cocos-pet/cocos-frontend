import {ReactNode} from "react";
import * as styles from "./Title.css";

interface TitleProps {
  text: ReactNode;
}
const Title = ({ text }: TitleProps) => {
  return <div className={styles.titleStyle}>{text}</div>;
};

export default Title;
