import { IcShape } from "@asset/svg/index";

type CommunityItem = {
  id: string;
  label: string;
  path: string;
  svg: typeof IcShape;
};

const updatePath = (id: string, paramName: string): string => {
  const url = new URL(id, "http://example.com");
  const params = new URLSearchParams(url.search);

  const typeValue = params.get(paramName);
  if (typeValue) {
    return `/community/category?${paramName}=${typeValue}`;
  }

  return id;
};

export const COMMUNITY_CONTENT: CommunityItem[] = [
  {
    id: "/community/category?symptom",
    label: "증상·질병",
    path: updatePath("/community/category?symptom", "symptom"),
    svg: IcShape,
  },
  {
    id: "/community/category?hospital",
    label: "병원고민",
    path: updatePath("/community/category?hospital", "hospital"),
    svg: IcShape,
  },
  {
    id: "/community/category?healing",
    label: "일상·치유",
    path: updatePath("/community/category?healing", "healing"),
    svg: IcShape,
  },
  {
    id: "/community/category?magazine",
    label: "코코스매거진",
    path: updatePath("/community/category?magazine", "magazine"),
    svg: IcShape,
  },
];
