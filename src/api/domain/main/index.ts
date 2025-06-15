import { API_PATH } from "@api/constants/apiPath";
import { get, post } from "@api/index";
import { paths } from "@type/schema";
import { RequestBody } from "@api/shared";

//인기글 조회 API
type GetPopularResponse = paths["/api/dev/posts/popular"]["get"]["responses"]["200"]["content"]["*/*"];

export const getPopular = async (): Promise<GetPopularResponse> => {
  const { data } = await get<GetPopularResponse>(API_PATH.POST_POPULAR);
  return data;
};

//신체 부위 조회 API
type GetBodyPartsResponse = paths["/api/dev/bodies"]["get"]["responses"]["200"]["content"]["*/*"];

export const getBodyParts = async (petProblem: string): Promise<GetBodyPartsResponse> => {
  const validProblem = petProblem === "symptom" || petProblem === "disease" ? petProblem : "symptom";

  const { data } = await get<GetBodyPartsResponse>(`${API_PATH.BODY}?petProblem=${validProblem}`);
  return data;
};

export interface PostCommentWithMentionRequest {
  orgIds: number[] | null;
  content: string;
  postId: number;
}

export interface MeetingPeopleResponse {
  requestBody: PostCommentWithMentionRequest;
}
