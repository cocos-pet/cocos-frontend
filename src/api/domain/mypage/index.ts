import { API_PATH } from "@api/constants/apiPath";
import { get } from "@api/index";
import { paths } from "@type/schema";

//todo : try-catch문 작성하기
export const getMemberInfo = async (nickname?: string) => {
  //type getMemberInfoRequest = paths["/api/dev/members"]["get"]["requestBody"];
  type MemberInfoResponse = paths["/api/dev/members"]["get"]["responses"]["200"]["content"]["*/*"];
  const { data } = await get<MemberInfoResponse>(API_PATH.MEMBERS, {
    params: {
      nickname,
    },
  });

  return data.data;
};

//nickname을 안주고 accessToken만 주면 나의 반려동물 정보
export const getPetInfo = async (nickname?: string) => {
  type MyPetInfo = paths["/api/dev/pets"]["get"]["responses"]["200"]["content"]["*/*"];
  const { data } = await get<MyPetInfo>(`${API_PATH.PETS}`, {
    params: {
      nickname,
    },
  });
  return data.data;
};

export const getMyPost = async (nickname?: string) => {
  type GetMyPostResponse = paths["/api/dev/posts/my"]["get"]["responses"]["200"]["content"]["*/*"];
  const { data } = await get<GetMyPostResponse>(`${API_PATH.POST}/my`, {
    params: {
      nickname,
    },
  });

  if (!data.data?.posts?.length) return;
  return data.data.posts;
};

export const getMyComment = async (nickname?: string) => {
  type GetMyCommentResponse = paths["/api/dev/comments/my"]["get"]["responses"]["200"]["content"]["*/*"];
  const { data } = await get<GetMyCommentResponse>(`${API_PATH.COMMENTS}/my`, {
    params: {
      nickname,
    },
  });
  return data.data;
};
