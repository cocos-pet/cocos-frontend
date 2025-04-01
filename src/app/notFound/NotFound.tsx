import {Link} from "react-router-dom";
import * as styles from "./NotFound.css";
import notFoundGraphic from "@asset/image/notFoundGraphic.png";
import {PATH} from "@route/path";
import Image from "next/image";

const NotFound = () => {
  return (
    <section className={styles.notFoundContainer}>
      <article className={styles.notFoundeWrapper}>
        <Image className={styles.notFoundImage} src={notFoundGraphic} alt="404" width={196} height={196} />
        <div className={styles.notFoundTextWrapper}>
          <h1 className={styles.nothingText}>앗, 이곳엔 아무것도 없어요</h1>
          <Link to={PATH.MAIN} className={styles.goHomeText}>
            홈으로 가기
          </Link>
        </div>
      </article>
    </section>
  );
};

export default NotFound;
