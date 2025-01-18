import { useQuery } from "@tanstack/react-query";
import { getMemberInfo } from ".";

export const MEMBER_QUERY_KEY = {
  MEMBER_INFO: () => ["memeberInfo"],
};

export const useGetMemberInfo = () => {
  return useQuery({
    queryKey: MEMBER_QUERY_KEY.MEMBER_INFO(),
    queryFn: () => {
      return getMemberInfo();
    },
    staleTime: 1000 * 60 * 5,
  });
};
