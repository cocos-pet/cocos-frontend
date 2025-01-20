import { API_PATH } from "@api/constants/apiPath";
import { get } from "@api/index";
import { paths } from "@type/schema";

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

//아래는 예시입니다.
//만약 스키마 사용 못할 경우, 아래와 같이 필요한 request body 타입 정의하기 (+ response 인터페이스도 정의하기)
export interface PostCommentWithMentionRequest {
  orgIds: number[] | null;
  content: string;
  postId: number;
}

export interface MeetingPeopleResponse {
  requestBody: PostCommentWithMentionRequest;
}

//⭐️!!스키마는 paths로 사용하기로 약속!!⭐️
//import { paths } from "src/__generated__/schema;
// type Post = paths['/post/v2']['get']['responses']['200']['content']['application/json;charset=UTF-8']['posts'];

//아래와 같이 requset용 타입 , response용 타입으로 사용하는게 당장은 편해도 장기적인 유지 보수에는 불리.
//따라서 아래와 같은 방식은 사용 x
// import { components } from "@typings/api/schema";
// export type PostCommentWithMentionRequest = components["schemas"]["PostCommentWithMentionRequest"];

// export type PostCommentWithMentionResponse = components["schemas"]["PostCommentWithMentionResponse"];

/*
    🐶🐶🐶🐶🐶get API를 위한 useQuery 작성 예시🐶🐶🐶🐶🐶
    (스키마 사용 가정) - 만약 스키마가 없다면, get<PostCommentWithMentionRequest>과 같은 형식으로 응답값 타입 정의해서 사용할거임
*/
//1. api 함수를 작성한다
// export const getPost = async (postId: string) => {
//     type getPostType = paths['/post/v2/{postId}']['get']['responses']['200']['content']['application/json;charset=UTF-8'];
//     const { data } = await get<getPostType>(`/post/v2/${postId}`);
//     return data;
//   };

/*
    🐱🐱🐱🐱🐱delete, post, put API를 위한 useMutation 작성 예시🐱🐱🐱🐱🐱
    (스키마 사용 가정)
*/
//1. api 함수를 작성한다
// export const deleteComment = async (commentId: number) => {
//     return (await api.delete(`/comment/v2/${commentId}`)).data;
//   };
