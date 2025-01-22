//궁금증 : undefind을 인자로 보내면, 인식을 할까?

import { useQuery } from "@tanstack/react-query";
import { getMemberInfo, getMyComment, getMyPost, getPetInfo } from ".";

export const PET_EDIT_USER_QUERY_COMMON_KEY = "petEditInfo";

export const PETINFO_QUERY_KEY = {
  PET_INFO: (nickname?: string) => [PET_EDIT_USER_QUERY_COMMON_KEY, "petInfo", nickname],
};

export const MEMBER_QUERY_KEY = {
  MEMBER_INFO: (nickname?: string) => [PET_EDIT_USER_QUERY_COMMON_KEY, "memeberInfo", nickname],
};

export const MY_POST_QUERY_KEY = {
  MY_POST: (nickname?: string) => ["myPostList", nickname],
};

export const MY_COMMENT_QUERY_KEY = {
  MY_COMMENT: (nickname?: string) => ["myCommentList", nickname],
};

//todo: invaildate 필요(나중에 patch 되면)
export const useGetPetInfo = (nickname?: string) => {
  return useQuery({
    queryKey: PETINFO_QUERY_KEY.PET_INFO(nickname),
    queryFn: () => getPetInfo(nickname),
    staleTime: 1000 * 60 * 10,
  });
};

export const useGetMemberInfo = (nickname?: string) => {
  return useQuery({
    queryKey: MEMBER_QUERY_KEY.MEMBER_INFO(),
    queryFn: () => {
      return getMemberInfo(nickname);
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useGetMyPost = (nickname?: string) => {
  return useQuery({
    queryKey: MY_POST_QUERY_KEY.MY_POST(nickname),
    queryFn: () => getMyPost(nickname),
    staleTime: 1000 * 60 * 5,
  });
};

export const useGetMyComment = (nickname?: string) => {
  return useQuery({
    queryKey: MY_COMMENT_QUERY_KEY.MY_COMMENT(nickname),
    queryFn: () => getMyComment(nickname),
    staleTime: 1000 * 60 * 5,
  });
};
