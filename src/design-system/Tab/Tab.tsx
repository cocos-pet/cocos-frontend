import * as styles from "./Tab.css";

interface TabPropTypes {
  children: string;
  width?: string;
  active?: boolean;
  variant?: "good" | "bad";
  onClick?: () => void;
}

const Tab = ({ children, width, onClick, active = false, variant = "good" }: TabPropTypes) => {
  return (
    <div style={{ width: width }} className={styles.tab} onClick={onClick}>
      <div className={styles.tabContent}>{children}</div>
      <div className={styles.tabBar({ active: active, variant })} />
    </div>
  );
};

export default Tab;
