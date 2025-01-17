import * as styles from "./Tab.css";

interface TabPropTypes {
  children: string;
  width?: string;
  active?: boolean;
  onClick?: () => void;
}

const Tab = ({ children, width, onClick, active = false }: TabPropTypes) => {
  return (
    <div style={{ width: width }} className={styles.tab} onClick={onClick}>
      <div className={styles.tabContent}>{children}</div>
      <div className={styles.tabBar({ active: active })} />
    </div>
  );
};

export default Tab;
