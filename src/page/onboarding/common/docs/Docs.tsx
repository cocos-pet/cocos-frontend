import { ReactNode } from "react";
import * as styles from "./Docs.css";

interface DocsProps {
  text: ReactNode;
}

const Docs = ({ text }: DocsProps) => {
  return <div className={styles.titleStyle}>{text}</div>;
};

export default Docs;
