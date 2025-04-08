"use client";

import {Button} from "@common/component/Button";
import * as styles from "./Mypage.css";
import Divider from "@common/component/Divider/Divider";
import Tab from "@common/component/Tab/Tab";
import {useEffect, useState} from "react";
import MyPageContent from "./component/MyPageContent/MyPageContent";
import {IcChevronRight, IcPlus, IcSettings} from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import Nav from "@common/component/Nav/Nav";
import {PATH} from "@route/path";
import {NAV_CONTENT} from "@common/component/Nav/constant";
import {isLoggedIn} from "@api/index";
import {useGetMemberInfo, useGetPetInfo} from "@api/domain/mypage/hook";
import {useProtectedRoute} from "@route/useProtectedRoute";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AddFavoriteHospital from "./component/AddFavoriteHospital";

export type ActiveTabType = "review" | "post" | "comment";

const Mypage = () => {
  useProtectedRoute();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const [activeTab, setActiveTab] = useState<ActiveTabType>("review");

  const { isLoading, data: member } = useGetMemberInfo();
  const { data: petInfo } = useGetPetInfo();

  // 초기화 시 sessionStorage에서 활성 탭 가져오기
  useEffect(() => {
    const preSavedActiveTab = sessionStorage.getItem("activeTab");
    if (preSavedActiveTab) {
      setActiveTab(preSavedActiveTab as ActiveTabType);
    }
  }, []);

  useEffect(() => {
    setIsLogin(isLoggedIn());
  }, []);

  useEffect(() => {
    if (!petInfo) setIsRegister(false);
    else setIsRegister(true);
  }, [petInfo]);

  // activeTab 변경 시 sessionStorage에 저장
  useEffect(() => {
    sessionStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const isActiveTab = (tab: ActiveTabType) => {
    return activeTab === tab;
  };

  const handleTabClick = (tab: ActiveTabType) => {
    setActiveTab(tab);
  };

  if (isLoading || !member) return null;

  return (
    <div style={{ position: "relative", height: "auto" }}>
      <span style={{ position: "fixed", top: 0, width: "100%" }}>
        <HeaderNav
          centerContent={"마이페이지"}
          rightBtn={
            <span
              className={styles.settingWrapper({
                isLogin: isLogin,
              })}
              onClick={() => isLogin && router.push(PATH.SETTING.ROOT)}
            >
              <IcSettings width={24} height={24} />
            </span>
          }
        />
      </span>

      <article className={styles.myProfileWrapper}>
        {isLogin ? (
          <div className={styles.loginProfile}>
            {member.profileImage && (
              <Image 
                className={styles.profileImage} 
                alt="프로필 이미지" 
                src={member.profileImage}
                width={68}
                height={68} 
              />
            )}
            <span className={styles.userProfileText}>{member.nickname}</span>
            <Divider size="small" />

            {isRegister ? (
              <div className={styles.animalProfileWrapper}>
                {petInfo?.petImage && (
                  <Image 
                    className={styles.animalImage} 
                    alt="프로필이미지" 
                    src={petInfo.petImage}
                    width={52}
                    height={52} 
                  />
                )}
                <div className={styles.animalProfileTextWrapper}>
                  <span className={styles.animalMainText}>
                    {`${petInfo?.breed} `}
                    <span className={styles.textDivider}>|</span>
                    {` ${petInfo?.petAge} `}
                    <span className={styles.textDivider}>|</span>
                  </span>
                  <span className={styles.animalSubText}>
                    {"앓고있는 병 "}
                    {petInfo?.diseases?.map((disease) => (
                      <span className={styles.spanNoWrap} key={`hash-disease-${disease.id}`}>
                        {`#${disease.name}`}&nbsp;
                      </span>
                    ))}
                  </span>
                </div>
                <IcChevronRight
                  width={28}
                  height={28}
                  style={{ cursor: "pointer" }}
                  onClick={() => router.push(PATH.MYPAGE.EDIT_PET)}
                />  
              </div>
            ) : (
              <span style={{ width: "15.3rem" }}>
                <Button
                  variant={"solidNeutral"}
                  rightIcon={<IcPlus width={20} height={20} />}
                  size={"small"}
                  label="반려동물 추가하기"
                  onClick={() => router.push(PATH.REGISTER_PET.ROOT)}
                />
              </span>
            )}
            <Divider size="small" />
            <AddFavoriteHospital isAdded={false}/>
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
        <Tab active={isActiveTab("review")} width={"100%"} onClick={() => handleTabClick("review")}>
          나의 병원 후기
        </Tab>
        <Tab active={isActiveTab("post")} width={"100%"} onClick={() => handleTabClick("post")}>
          나의 게시글
        </Tab>
        <Tab active={isActiveTab("comment")} width={"100%"} onClick={() => handleTabClick("comment")}>
          나의 댓글
        </Tab>
      </div>

      <article className={styles.myPageContentWrapper}>
        <div className={styles.contentBody}>
          {isLogin ? <MyPageContent tab={activeTab} /> : <div className={styles.nothingContent}>로그인 해주세요.</div>}
        </div>
      </article>

      <span style={{ position: "fixed", bottom: "0", backgroundColor: "white", width: "100%" }}>
        <Nav content={NAV_CONTENT} type={"nav"} />
      </span>
    </div>
  );
};

export default Mypage;
