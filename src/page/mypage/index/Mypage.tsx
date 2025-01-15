import { Button } from "@common/component/Button";
import * as styles from "./Mypage.css";
import Divider from "@common/component/Divider/Divider";
import Tab from "@common/component/Tab/Tab";
import { useState } from "react";
import MyPageContent from "./component/MyPageContent/MyPageContent";
import { IcChevronLeft, IcChevronRight, IcPlus, IcSettings } from "@asset/svg";
import { useNavigate } from "react-router-dom";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";

export type ActiveTabType = "review" | "post" | "comment";

//todo: 헤더 버튼 기능 연결 + 톱니바퀴 흐려지게 구현
//todo: api 형식 맞춰서 유저 프로필 내용, 동물 프로필 내용 불러오기 구성
//todo: cherveron right 버튼 클릭 시 마이페이지 수정 페이지로 이동하도록 구현
//todo: 푸터(네비게이션) 연결
//todo: 코멘트(댓글) 뷰 확정짓고 구현 + api 고려해서 만들어두기
//남이 볼 때 뷰 분리 : 그떄는 /mypage 가 아니라 /profie?id=3 으로 넘어가서 보도록
const Mypage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [activeTab, setActiveTab] = useState<ActiveTabType>("review");

  const isActiveTab = (tab: ActiveTabType) => {
    return activeTab === tab;
  };

  const handleTabClick = (tab: ActiveTabType) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ position: "relative", height: "auto" }}>
      <span style={{ position: "fixed", top: 0 }}>
        <HeaderNav
          leftIcon={<IcChevronLeft width={24} height={24} />}
          centerContent={"마이페이지"}
          rightBtn={<IcSettings width={24} height={24} />}
        />
      </span>

      <article className={styles.myProfileWrapper}>
        {isLogin ? (
          <div className={styles.loginProfile}>
            <img className={styles.profileImage} alt="프로필 이미지" />
            <span className={styles.userProfileText}>준혁</span>
            <Divider size="small" />

            {isRegister ? (
              <div className={styles.animalProfileWrapper}>
                <img className={styles.animalImage} alt="프로필이미지" />
                <div className={styles.animalProfileTextWrapper}>
                  <span className={styles.animalMainText}>골든 리트리버 | 12살 | </span>
                  <span className={styles.animalSubText}>앓고있는 병 #000 #000 #000</span>
                </div>
                <IcChevronRight width={28} height={28} />
              </div>
            ) : (
              <span style={{ width: "15.3rem" }}>
                <Button
                  variant={"solidNeutral"}
                  rightIcon={<IcPlus width={20} height={20} />}
                  size={"small"}
                  label="반려동물 추가하기"
                  onClick={() => navigate("/add-animal")} //todo: 반려동물 추가 뷰 구현하기
                />
              </span>
            )}
          </div>
        ) : (
          <div className={styles.unloginProfile}>
            <span className={styles.pleaseLoginText}>
              {"로그인 후"}
              <br />
              {"고민을 공유해보세요!"}
            </span>
            <Button label={"로그인"} onClick={() => setIsLogin(true)} />
          </div>
        )}
      </article>

      <Divider />

      <div className={styles.contentHeaderWrapper}>
        <Tab active={isActiveTab("review")} width={"12.5rem"} onClick={() => handleTabClick("review")}>
          병원 후기
        </Tab>
        <Tab active={isActiveTab("post")} width={"12.5rem"} onClick={() => handleTabClick("post")}>
          게시글
        </Tab>
        <Tab active={isActiveTab("comment")} width={"12.5rem"} onClick={() => handleTabClick("comment")}>
          댓글
        </Tab>
      </div>

      <article className={styles.myPageContentWrapper}>
        <div className={styles.contentBody}>
          {isLogin ? (
            <MyPageContent tab={activeTab} />
          ) : (
            <div className={styles.nothingContent}>로그인을 해주세요!</div>
          )}
        </div>
      </article>
    </div>
  );
};

export default Mypage;
