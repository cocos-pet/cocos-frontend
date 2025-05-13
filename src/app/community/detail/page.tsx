"use client";

import * as styles from "./SymptomDetail.css.ts";
import HeaderNav from "@common/component/HeaderNav/HeaderNav.tsx";
import { IcLeftarrow } from "@asset/svg";
import { PATH } from "@route/path.ts";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Tab from "@common/component/Tab/Tab.tsx";
import { CommunityDetailContent, LoadingFallback, ReviewDetailContent } from "@app/community/detail/_section";

// Types
type ActiveTabType = "review" | "community";

// Constants
const SYMPTOM_MAPPING: Record<string, string> = {
  1: "피부/털",
  2: "배/소화기",
  3: "소변/신장",
  4: "눈",
  5: "귀",
  6: "입",
  7: "배설",
  8: "폐/호흡기",
  9: "뼈/관절/근육",
  10: "뇌/신경계",
  11: "체중/몸",
  12: "행동/소리",
};

const PostDetail = () => {
  const searchParams = useSearchParams();
  const typeId = searchParams?.get("id");
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ActiveTabType>("community");

  const symptomName = typeId ? SYMPTOM_MAPPING[typeId] || "증상" : "증상";
  const isActiveTab = (tab: ActiveTabType) => activeTab === tab;

  return (
    <div className={styles.categoryContainer}>
      <div className={styles.headerContainer}>
        <HeaderNav leftIcon={<IcLeftarrow />} centerContent={symptomName} onLeftClick={() => router.push(PATH.MAIN)} />
      </div>
      <div className={styles.tabContainer}>
        <Tab active={isActiveTab("community")} width={"100%"} onClick={() => setActiveTab("community")}>
          커뮤니티
        </Tab>
        <Tab active={isActiveTab("review")} width={"100%"} onClick={() => setActiveTab("review")}>
          병원리뷰
        </Tab>
      </div>
      {activeTab === "review" && <ReviewDetailContent />}
      {activeTab === "community" && <CommunityDetailContent />}
    </div>
  );
};

const Page = () => (
  <Suspense fallback={<LoadingFallback />}>
    <PostDetail />
  </Suspense>
);

export default Page;
