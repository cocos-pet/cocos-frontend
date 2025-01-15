import { Button } from "@common/component/Button";
import * as styles from "./Mypage.css";
import Divider from "@common/component/Divider/Divider";
import Tab from "@common/component/Tab/Tab";
import { useState } from "react";


type ActiveTabType = "review" | "post" | "comment";

const Mypage = () => {
  const [activeTab, setActiveTab] = useState<ActiveTabType>("review");

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

      <article className={styles.myPageContentWrapper}>
        <div className={styles.contentHeaderWrapper}>
          <Tab active={true} width={"12.5rem"}>
            병원 후기
          </Tab>
          <Tab active={true} width={"12.5rem"}>
            게시글
          </Tab>
          <Tab active={true} width={"12.5rem"}>
            댓글
          </Tab>
        </div>
        <div className={styles.contentBody}></div>
      </article>
    </div>
  );
};

export default Mypage;
