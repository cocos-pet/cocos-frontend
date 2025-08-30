"use client";

import Symptom from "@app/main/_section/symptom/Symptom.tsx";
import * as styles from "./Main.css.ts";
import { TextField } from "src/design-system/TextField/index.tsx";
import { IcSearch } from "@asset/svg";
import MainFooter from "@app/main/_section/mainFooter/MainFooter.tsx";
import Divider from "src/design-system/Divider/Divider.tsx";
import HotPost from "@app/main/_section/hotPost/HotPost.tsx";
import MainHeader from "@app/main/_section/mainHeader/mainHeader.tsx";
import Nav from "@common/component/Nav/Nav.tsx";
import Spacing from "@common/component/Spacing/Spacing.tsx";
import { NAV_CONTENT } from "@common/component/Nav/constant.ts";

import { PATH } from "@route/path.ts";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HotHospital from "@app/main/_section/hotHospital/HotHospital.tsx";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("searchBackUrl", PATH.MAIN);
    }
  }, []);

  const handleSearchClick = () => {
    router.push(PATH.COMMUNITY.SEARCH);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        {/* tavian */}
        <TextField
          state="main"
          placeholder="심장병, 백내장"
          onClick={handleSearchClick}
          value=""
          icon={<IcSearch />}
          readOnly
        />
      </div>
      <MainHeader />
      <Symptom />
      <Divider />
      <HotPost />
      <Divider />
      <HotHospital />
      <MainFooter />
      <Spacing marginBottom="8" />
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
