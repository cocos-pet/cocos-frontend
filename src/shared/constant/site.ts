const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cocos-pet.kr";

export const siteConfig = {
  name: "COCOS",
  alternateName: "코코스",
  title: "COCOS | 코코스",
  titleTemplate: "%s | COCOS",
  description:
    "COCOS(코코스)는 반려동물 증상 고민을 나누고, 동물병원 정보와 리뷰를 확인할 수 있는 반려동물 커뮤니티 서비스입니다.",
  keywords: [
    "COCOS",
    "코코스",
    "반려동물",
    "펫 커뮤니티",
    "동물병원",
    "반려동물 증상",
    "반려동물 건강",
    "병원 리뷰",
  ],
  url: SITE_URL,
  logoUrl: `${SITE_URL}/cocos2.svg`,
  defaultOgImageUrl: `${SITE_URL}/cocos2.svg`,
  locale: "ko_KR",
} as const;

export const resolveOgImage = (image?: string) => image || siteConfig.defaultOgImageUrl;

export const isProd = process.env.NEXT_PUBLIC_DEPLOY_ENV === "prod";

export const publicRoutes = ["/main", "/community", "/review"] as const;
