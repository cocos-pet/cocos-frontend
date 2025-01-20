import * as styles from "./Login.css";
import { IcLeftIcon } from "@asset/svg";
import { IcoSkeleton } from "@asset/svg";

const Login = () => {
  return (
    <div className={styles.layout}>
      <IcoSkeleton width={254} height={258} />
      <div className={styles.buttonStyle}>
        <IcLeftIcon width={20} height={20} />

        <span>카카오톡 로그인</span>
      </div>
    </div>
  );
};

export default Login;
