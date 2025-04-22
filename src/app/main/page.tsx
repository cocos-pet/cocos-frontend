"use client";

import Symptom from "@app/main/_section/symptom/Symptom.tsx";
import * as styles from "./Main.css.ts";
import { TextField } from "@common/component/TextField";
import { IcSearch } from "@asset/svg";
import MainFooter from "@app/main/_section/mainFooter/MainFooter.tsx";
import Divider from "@common/component/Divider/Divider.tsx";
import HotPost from "@app/main/_section/hotPost/HotPost.tsx";
import MainHeader from "@app/main/_section/mainHeader/mainHeader.tsx";
import Nav from "@common/component/Nav/Nav.tsx";
import Spacing from "@common/component/Spacing/Spacing.tsx";
import { NAV_CONTENT } from "@common/component/Nav/constant.ts";

import { PATH } from "@route/path.ts";
import { useGetBodyParts, useQueryGetPopular } from "@api/domain/main/hook.ts";
import { useEffect } from "react";
import { useGetMemberInfo } from "@api/domain/mypage/hook.ts";
import { useProtectedRoute } from "@route/useProtectedRoute.tsx";
import { useRouter } from "next/navigation";
import HotHospital from "@app/main/_section/HotHospital/HotHospital.tsx";

export default function Page() {
  useProtectedRoute();

  const { data: postsData } = useQueryGetPopular();
  const { data: getBodyParts } = useGetBodyParts("SYMPTOM");
  const { data: nickName } = useGetMemberInfo();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("searchBackUrl", PATH.MAIN);
    }
  }, []);

  const handleSearchClick = () => {
    router.push(PATH.COMMUNITY.SEARCH);
  };

  const handleTextFieldChange = () => {};

  if (!postsData || !getBodyParts) return null;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <TextField
          state="main"
          placeholder="심장병, 백내장"
          onClick={handleSearchClick}
          onChange={handleTextFieldChange}
          value=""
          icon={<IcSearch />}
        />
      </div>
      <MainHeader />
      <Symptom />
      <Divider />
      <HotPost nickname={nickName?.nickname} />
      <MainFooter />
      <Spacing marginBottom="8" />
      <HotHospital />
      <span
        style={{
          position: "fixed",
          bottom: "0",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <Nav content={NAV_CONTENT} type={"nav"} />
      </span>
    </div>
  );
}
