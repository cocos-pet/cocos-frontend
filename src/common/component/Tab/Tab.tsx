import * as styles from "./Tab.css";

interface TabPropTypes {
  children: string;
  active?: boolean;
  onClick?: () => void;
}

const Tab = ({ children, onClick, active = false }: TabPropTypes) => {
  return (
    <div className={styles.tab} onClick={onClick}>
      <div className={styles.tabContent}>{children}</div>
      <div className={styles.tabBar({ active: active })} />
    </div>
  );
};

export default Tab;
