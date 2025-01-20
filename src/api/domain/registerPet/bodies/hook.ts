import { useQuery } from "@tanstack/react-query";
import { getBodies } from "@api/domain/registerPet/bodies/index";

export const BODY_QUERY_KEY = {
  // 키값 동적으로
  BODY_QUERY_KEY: (petProblem: string) => ["bodies", petProblem],
};

export const useBodiesGet = (petProblem: string) => {
  return useQuery({
    queryKey: BODY_QUERY_KEY.BODY_QUERY_KEY(petProblem),
    queryFn: () => getBodies(petProblem),
  });
};
