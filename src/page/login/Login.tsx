import * as styles from "./Login.css";
import { IcLeftIcon } from "@asset/svg";
import { IcoSkeleton } from "@asset/svg";
import { KAKAO_AUTH_URI } from "@auth/OAuth";

const Login = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URI; // 상수화
  };

  return (
    <div className={styles.layout}>
      <IcoSkeleton width={254} height={258} />
      <div className={styles.buttonStyle} onClick={handleLogin}>
        <IcLeftIcon width={20} height={20} />

        <button onClick={handleLogin}>카카오톡 로그인</button>
      </div>
    </div>
  );
};

export default Login;
