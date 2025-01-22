import { useQuery } from "@tanstack/react-query";
import { getBodyParts, getPopular } from ".";

export const useQueryGetPopular = () => {
  return useQuery({
    queryKey: [MAIN_QUERY_KEY.POST_POPULAR_LIST],
    queryFn: () => getPopular(),
  });
};

export const MAIN_QUERY_KEY = {
  POST_POPULAR_LIST: () => ["postPopularList"],
};

export const MAIN_BODY_PARTS_QUERY_KEY = {
  BODY_PARTS_KEY: (petProblem: "DISEASE" | "SYMPTOM") => ["body", petProblem],
};

export const useGetBodyParts = (petProblem: "DISEASE" | "SYMPTOM") => {
  return useQuery({
    queryKey: MAIN_BODY_PARTS_QUERY_KEY.BODY_PARTS_KEY(petProblem),
    queryFn: () => getBodyParts(petProblem),
  });
};

//🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶
// 2. 쿼리 함수를 작성한다
// 이때 쿼리 키는 고유하게 설정한다.
// import { useQuery } from "@tanstack/react-query";
// export const useQueryGetPost = (postId: string) => {
//   return useQuery({
//     queryKey: ["getPost", postId],
//     queryFn: () => getPost(postId),
//     //staleTime : 1000 * 60 * 10, //설정하지 않아도 됨, 사용하려면 적정 시간 생각하기 - 기본값은 0
//     //gcTime은 기본값 5분 -> 굳이 설정하지 말기
//   });
// };

//🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱
// 2. 쿼리 함수를 작성한다
// 이때, onSuccess 에 invalidate를 꼭 연결한다 (이를 위해서 queryClient도 가져와야한다)
//invalidate 시 refetchType 옵션은 어떤 쿼리를 refetch할 것인지 나타내며, 타입은 'active', 'inactive', 'all', 'none' 이 있으며 기본값은 active
// active의 의미 : (쿼리가 현재 컴포넌트에서 사용되고 있는 경우(즉, 해당 쿼리의 데이터를 조회 중인 경우).)
// exact 옵션은 단지 쿼리키의 첫번째 요소가 아니라 다른 요소들이 정확하게 일치하는 지 확인
// invalidate 를 하면 굳이 queryClient.refetchQueries({queryKey, ...options}) 를 사용할 필요가 없음 -> 사용하는게 비효율적

// import { useQueryClient } from "@tanstack/react-query";
// export const useDeleteComment = (queryId: string) => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (commentId: number) => deleteComment(commentId),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["/comment/v1", queryId], exact, refetchType: "active" });
//     },
//   });
// };
