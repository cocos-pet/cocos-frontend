import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchNickname } from ".";

export const NICKNAME_QUERY_KEY = {
  NICKNAME_QUERY_KEY: (nickname?: string) => [nickname],
};

export const usePatchNickname = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["mutationNickname"],
    mutationFn: async (nickname: string) => {
      return patchNickname(nickname);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [NICKNAME_QUERY_KEY.NICKNAME_QUERY_KEY()],
      });
    },
  });
};
