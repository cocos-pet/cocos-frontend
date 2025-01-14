import * as styles from "./Title.css";
import { ONBOARDING } from "@page/onboarding/constant/title";

const Title = () => {
  return <div className={styles.titleStyle}>{ONBOARDING.nickName.title}</div>;
};

export default Title;
