import { IcShape } from "@asset/svg/index";

type NavItem = {
  id: string;
  label: string;
  path: string;
  svg: typeof IcShape;
};

export const COMMUNITY_CONTENT: NavItem[] = [
  { id: "symptom", label: "증상·질병", path: "/community/category?type=symptom", svg: IcShape },
  { id: "hospital", label: "병원고민", path: "/community/category?type=hospital", svg: IcShape },
  { id: "healing", label: "일상·치유", path: "/community/category?type=healing", svg: IcShape },
  { id: "magazine", label: "코코스매거진", path: "/community/category?type=magazine", svg: IcShape },
];
