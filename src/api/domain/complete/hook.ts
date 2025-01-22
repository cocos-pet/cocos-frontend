import { useQuery } from "@tanstack/react-query";
import { getNickname } from ".";

export const NICKNAME_QUERY_KEY = {
  NICKNAME_QUERY_KEY: () => ["nickname"],
};

export const useGetNickname = () => {
  return useQuery({
    queryKey: NICKNAME_QUERY_KEY.NICKNAME_QUERY_KEY(),
    queryFn: () => {
      return getNickname();
    },
  });
};
