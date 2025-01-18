import { paths } from "@type/schema";

export const getMemberInfo = async () => {
  type getMemberInfoRequest = paths["/api/dev/members"]["get"]["requestBody"];
};
