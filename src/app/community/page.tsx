'use client';

import { IcSearch } from "@asset/svg";
import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import Nav from "@common/component/Nav/Nav";
import { useRouter, useSearchParams } from "next/navigation";
import Divider from "@common/component/Divider/Divider";
import Banner from "../../page/community/index/components/Banner/Banner";
import SelectPost from "../../page/community/index/components/SelectPost/SelectPost";
import FloatingBtn from "@common/component/FloatingBtn/Floating";
import * as styles from "../../page/community/index/Community.css";
import { NAV_CONTENT } from "@common/component/Nav/constant";
import { useQueryGetCategory } from "@api/domain/community/category/hook";
import { useEffect } from "react";
import { useProtectedRoute } from "@route/useProtectedRoute";

export default function CommunityPage() {
  useProtectedRoute();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem("searchBackUrl", "/community");
    }
  }, []);

  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const handleSearchClick = () => {
    router.push("/community/search");
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
        <HeaderNav centerContent="커뮤니티" rightBtn={<IcSearch onClick={handleSearchClick} />} />
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
        <FloatingBtn onClick={() => router.push(`/community/write?category=${type}`)} />
      </div>
      <div className={styles.communityFooter}>
        <Nav content={NAV_CONTENT} />
      </div>
    </div>
  );
} 