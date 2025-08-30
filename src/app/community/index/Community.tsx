"use client";

import { IcSearch } from "@asset/svg";
import HeaderNav from "src/design-system/HeaderNav/HeaderNav";
import Nav from "@common/component/Nav/Nav";
import Divider from "src/design-system/Divider/Divider";
import Banner from "../_component/Banner/Banner";
import SelectPost from "../_component/SelectPost/SelectPost";
import FloatingBtn from "src/design-system/FloatingBtn/Floating";
import * as styles from "./Community.css";
import { PATH } from "@route/path";
import { NAV_CONTENT } from "@common/component/Nav/constant";
import { useQueryGetCategory } from "@api/domain/community/category/hook";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@providers/AuthProvider";
import { useIsPetRegistered } from "@common/hook/useIsPetRegistered";
import { Modal } from "@common/component/Modal/Modal";

const Community = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("searchBackUrl", PATH.COMMUNITY.ROOT);
    }
  }, []);

  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams?.get("type");

  const { isAuthenticated } = useAuth();
  const isPetRegistered = useIsPetRegistered();

  const handleWriteClick = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    if (!isPetRegistered) {
      router.push(PATH.ONBOARDING.COMPLETE);
      return;
    }

    router.push(`/community/write?category=${type}`);
  };

  const handleSearchClick = () => {
    router.push(PATH.COMMUNITY.SEARCH);
  };

  const extractTypeFromName = (name: string) => {
    if (name === "증상·질병") {
      return "symptom";
    }

    if (name === "병원고민") {
      return "hospital";
    }

    if (name === "일상·치유") {
      return "healing";
    }

    if (name === "코코스매거진") {
      return "magazine";
    }

    return "null";
  };

  const { data: categories } = useQueryGetCategory();
  const categoryList = categories?.data?.categories || [];

  const communityContent = categoryList.map((category) => ({
    id: String(category.id),
    name: category.name || "Unnamed",
    image: category.image || "default-image-url",
    type: extractTypeFromName(category.name as string),
  }));

  return (
    <div className={styles.communityContainer}>
      <div className={styles.communityHeader}>
        <HeaderNav
          centerContent="커뮤니티"
          rightBtn={<IcSearch onClick={handleSearchClick} />}
        />
      </div>
      <div className={styles.bannerContainer}>
        <Banner />
      </div>
      <div className={styles.categoryContainer}>
        <Nav content={communityContent} type="community" />
      </div>
      <Divider />
      <div className={styles.postContainer}>
        <SelectPost />
      </div>
      <div className={styles.btnContainer}>
        <FloatingBtn onClick={handleWriteClick} />
      </div>
      <div className={styles.communityFooter}>
        <Nav content={NAV_CONTENT} />
      </div>

      <Modal.Root open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
        <Modal.Content
          title={<Modal.Title>로그인이 필요해요.</Modal.Title>}
          bottomAffix={
            <Modal.BottomAffix>
              <Modal.Close label={"취소"} />
              <Modal.Confirm
                label={"로그인"}
                onClick={() => router.push(PATH.LOGIN)}
              />
            </Modal.BottomAffix>
          }
        >
          코코스를 더 잘 즐기기 위해 로그인을 해주세요.
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};

export default Community;
