import { Button } from "@common/component/Button";
import * as styles from "./Mypage.css";
import Divider from "@common/component/Divider/Divider";
import Tab from "@common/component/Tab/Tab";
import { useState } from "react";
import MyPageContent from "./component/MyPageContent/MyPageContent";
import { IcChevronLeft, IcChevronRight, IcPlus, IcSettings } from "@asset/svg";
import { useNavigate } from "react-router-dom";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import Nav from "@common/component/Nav/Nav";
import { PET_PROFILE, USER_PROFILE } from "./constant";
import { PATH } from "@route/path";

export type ActiveTabType = "review" | "post" | "comment";

const Mypage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false); //todo: 서버로부터 받아와서 하기
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
          leftIcon={
            <IcChevronLeft
              width={24}
              height={24}
              onClick={() => navigate(-1)}
            />
          }
          centerContent={"마이페이지"}
          rightBtn={
            <span
              className={styles.settingWrapper({
                isLogin: isLogin,
              })}
              onClick={() => isLogin && navigate(PATH.SETTING.ROOT)}
            >
              <IcSettings width={24} height={24} />
            </span>
          }
        />
      </span>

      <article className={styles.myProfileWrapper}>
        {isLogin ? (
          <div className={styles.loginProfile}>
            <img
              className={styles.profileImage}
              alt="프로필 이미지"
              src={USER_PROFILE.profileImage}
            />
            <span className={styles.userProfileText}>
              {USER_PROFILE.nickname}
            </span>
            <Divider size="small" />

            {isRegister ? (
              <div className={styles.animalProfileWrapper}>
                <img
                  className={styles.animalImage}
                  alt="프로필이미지"
                  src={PET_PROFILE.petImage}
                />
                <div className={styles.animalProfileTextWrapper}>
                  <span
                    className={styles.animalMainText}
                  >{`${PET_PROFILE.breed} | ${PET_PROFILE.petAge} |`}</span>
                  <span className={styles.animalSubText}>
                    {`앓고있는 병 ${PET_PROFILE.diseases
                      .map((disease) => `#${disease.name}`)
                      .join(" ")}`}
                  </span>
                </div>
                <IcChevronRight
                  width={28}
                  height={28}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(PATH.MYPAGE.EDIT_PET)}
                />
              </div>
            ) : (
              <span style={{ width: "15.3rem" }}>
                <Button
                  variant={"solidNeutral"}
                  rightIcon={<IcPlus width={20} height={20} />}
                  size={"small"}
                  label="반려동물 추가하기"
                  onClick={() => navigate(PATH.REGISTER_PET.ROOT)}
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
        <Tab
          active={isActiveTab("review")}
          width={"12.5rem"}
          onClick={() => handleTabClick("review")}
        >
          나의 병원 후기
        </Tab>
        <Tab
          active={isActiveTab("post")}
          width={"12.5rem"}
          onClick={() => handleTabClick("post")}
        >
          나의 게시글
        </Tab>
        <Tab
          active={isActiveTab("comment")}
          width={"12.5rem"}
          onClick={() => handleTabClick("comment")}
        >
          나의 댓글
        </Tab>
      </div>

      <article className={styles.myPageContentWrapper}>
        <div className={styles.contentBody}>
          {isLogin ? (
            <MyPageContent tab={activeTab} />
          ) : (
            <div className={styles.nothingContent}>로그인 해주세요.</div>
          )}
        </div>
      </article>

      <span
        style={{ position: "fixed", bottom: "0", backgroundColor: "white" }}
      >
        <Nav />
      </span>
    </div>
  );
};

export default Mypage;
