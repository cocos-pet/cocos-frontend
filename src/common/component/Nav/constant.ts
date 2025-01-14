import { IcShape } from "@asset/svg/index";

type NavItem = {
  id: string;
  label: string;
  path: string;
  svg: typeof IcShape;
};

export const NAV_CONTENT: NavItem[] = [
  { id: "home", label: "홈", path: "/main", svg: IcShape },
  { id: "community", label: "커뮤니티", path: "/community", svg: IcShape },
  { id: "review", label: "병원리뷰", path: "/review", svg: IcShape },
  { id: "my", label: "마이", path: "/mypage", svg: IcShape },
];
