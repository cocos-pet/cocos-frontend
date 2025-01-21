import * as styles from "./Profile.css";
import Divider from "@common/component/Divider/Divider";
import Tab from "@common/component/Tab/Tab";
import { useState } from "react";
import MyPageContent from "./component/ProfileContent/ProfileContent";
import { IcChevronLeft } from "@asset/svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import Nav from "@common/component/Nav/Nav";
import { PET_PROFILE, USER_PROFILE } from "./constant";
import { NAV_CONTENT } from "@common/component/Nav/constant";

export type ActiveTabType = "review" | "post" | "comment";

//남이 볼 때 뷰 분리 : /profie?nickname=칠칠이최고 으로 넘어가서 보도록
const Profile = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<ActiveTabType>("review");

  //todo: 이 쿼리로 상대 프로필 내용 받아오기
  const query = searchParams.get("nickname");

  const isActiveTab = (tab: ActiveTabType) => {
    return activeTab === tab;
  };

  const handleTabClick = (tab: ActiveTabType) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ position: "relative", height: "auto" }}>
      <span style={{ position: "fixed", top: 0, width: "100%" }}>
        <HeaderNav
          leftIcon={<IcChevronLeft width={24} height={24} onClick={() => navigate(-1)} />}
          centerContent={"프로필"}
        />
      </span>

      <article className={styles.myProfileWrapper}>
        <div className={styles.loginProfile}>
          <img className={styles.profileImage} alt="프로필 이미지" src={USER_PROFILE.profileImage} />
          <span className={styles.userProfileText}>{USER_PROFILE.nickname}</span>
          <Divider size="small" />

          <div className={styles.animalProfileWrapper}>
            <img className={styles.animalImage} alt="프로필이미지" src={PET_PROFILE.petImage} />
            <div className={styles.animalProfileTextWrapper}>
              <span className={styles.animalMainText}>{`${PET_PROFILE.breed} | ${PET_PROFILE.petAge} |`}</span>
              <span className={styles.animalSubText}>
                {`앓고있는 병 ${PET_PROFILE.diseases.map((disease) => `#${disease.name}`).join(" ")}`}
              </span>
            </div>
          </div>
        </div>
      </article>

      <Divider />

      <div className={styles.contentHeaderWrapper}>
        <Tab active={isActiveTab("review")} width={"100%"} onClick={() => handleTabClick("review")}>
          병원 후기
        </Tab>
        <Tab active={isActiveTab("post")} width={"100%"} onClick={() => handleTabClick("post")}>
          게시글
        </Tab>
        <Tab active={isActiveTab("comment")} width={"100%"} onClick={() => handleTabClick("comment")}>
          댓글
        </Tab>
      </div>

      <article className={styles.myPageContentWrapper}>
        <div className={styles.contentBody}>{<MyPageContent tab={activeTab} />}</div>
      </article>

      <span style={{ position: "fixed", bottom: "0", backgroundColor: "white", width: "100%" }}>
        <Nav content={NAV_CONTENT} type={"nav"} />
      </span>
    </div>
  );
};

export default Profile;
