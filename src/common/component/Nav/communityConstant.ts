import { IcShape } from "@asset/svg/index";

type CommunityItem = {
  id: string;
  label: string;
  path: string;
  svg: typeof IcShape;
};

export const COMMUNITY_CONTENT: CommunityItem[] = [
  { id: "/community/category?symptom", label: "증상·질병", path: "/community/category?type=symptom", svg: IcShape },
  { id: "/community/category?hospital", label: "병원고민", path: "/community/category?type=hospital", svg: IcShape },
  { id: "/community/category?healing", label: "일상·치유", path: "/community/category?type=healing", svg: IcShape },
  {
    id: "/community/category?magazine",
    label: "코코스매거진",
    path: "/community/category?type=magazine",
    svg: IcShape,
  },
];
