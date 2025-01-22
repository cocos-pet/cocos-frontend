import { IcMypage, IcHome, IcCommunity, IcHomeon, IcCommunityon, IcReviewon, IcMypageon, Reviewoff } from "@asset/svg";
import { PATH } from "@route/path";

type NavItem = {
  id: string;
  label: string;
  path: string;
  svg: React.ElementType;
  activeSvg: React.ElementType;
};

export const NAV_CONTENT: NavItem[] = [
  { id: "/main", label: "홈", path: PATH.MAIN, svg: IcHome, activeSvg: IcHomeon },
  { id: "/community", label: "커뮤니티", path: PATH.COMMUNITY.ROOT, svg: IcCommunity, activeSvg: IcCommunityon },
  { id: "/review", label: "병원리뷰", path: "/review", svg: Reviewoff, activeSvg: IcReviewon },
  { id: "/mypage", label: "마이", path: PATH.MYPAGE.ROOT, svg: IcMypage, activeSvg: IcMypageon },
];
