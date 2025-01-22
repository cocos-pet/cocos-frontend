import { useQuery } from "@tanstack/react-query";
import { getIsExist } from ".";

export const MEMBERS_CHECK_QUERY_KEY = {
  MEMBERS_CHECK_QUERY_KEY: (nickname: string) => ["check", nickname],
};

export const useCheckNicknameGet = (nickname: string) => {
  return useQuery({
    queryKey: MEMBERS_CHECK_QUERY_KEY.MEMBERS_CHECK_QUERY_KEY(nickname),
    queryFn: () => {
      return getIsExist(nickname);
    },
  });
};
