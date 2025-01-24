import * as styles from "./Login.css";
import { IcLeftIcon } from "@asset/svg";
import { KAKAO_AUTH_URI } from "@auth/OAuth";
import { IcGroup } from "@asset/svg";
import { IcCocosLogin } from "@asset/svg";
import { isLoggedIn } from "@api/index";
import { useNavigate } from "react-router-dom";
import { PATH } from "@route/path";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      //navigate는 부수효과이기 때문에 반드시 동기적 처리 x
      navigate(PATH.MAIN);
    }
  }, []);

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URI; // 상수화
  };

  return (
    <div className={styles.layout}>
      <IcGroup width={150} height={112} />
      <IcCocosLogin width={133} height={35} />
      <span className={styles.span}>반려인들의 간절한 마음이 모이는 치유의 공간</span>
      <div className={styles.buttonStyle} onClick={handleLogin}>
        <IcLeftIcon width={20} height={20} />
        <button onClick={handleLogin}>카카오톡 로그인</button>
      </div>
    </div>
  );
};

export default Login;
