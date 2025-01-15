import { IcShape } from "@asset/svg/index";

type CommunityItem = {
  id: string;
  label: string;
  path: string;
  svg: typeof IcShape;
};

export const COMMUNITY_CONTENT: CommunityItem[] = [
  { id: "/symptom", label: "증상·질병", path: "/symptom", svg: IcShape },
  { id: "/hospital", label: "병원고민", path: "/hospital", svg: IcShape },
  { id: "/daily", label: "일상·치유", path: "/daily", svg: IcShape },
  { id: "/cocosmagazine", label: "코코스매거진", path: "/cocosmagazine", svg: IcShape },
];
