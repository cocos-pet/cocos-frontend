import { Button } from "@common/component/Button";
import * as styles from "./Mypage.css";
import Divider from "@common/component/Divider/Divider";

const Mypage = () => {
  return (
    <div style={{ position: "relative", height: "auto" }}>
      <article className={styles.myProfileWrapper}>
        <div className={styles.unloginProfile}>
          <span className={styles.pleaseLoginText}>
            {"로그인 후"}
            <br />
            {"고민을 공유해보세요!"}
          </span>
          <Button label={"로그인"} />
        </div>
      </article>

      <Divider />

      <article className={styles.myPageContentWrapper}>하이</article>
      <article className={styles.myPageContentWrapper}>메이</article>
      <article className={styles.myPageContentWrapper}>키이</article>
    </div>
  );
};

export default Mypage;
