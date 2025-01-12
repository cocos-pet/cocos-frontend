import * as styles from "./Tab.css";

interface TabPropTypes {
  children: string;
  active?: boolean;
}

const Tab = ({ children, active = false }: TabPropTypes) => {
  return (
    <div className={styles.tab}>
      <div className={styles.tabContent}>{children}</div>
      <div className={styles.tabBar({ active: active })} />
    </div>
  );
};

export default Tab;
