import { useQuery } from "@tanstack/react-query";
import { getBodies } from "@api/domain/register-pet/bodies/index";

export const BODY_QUERY_KEY = {
  // 키값 동적으로
  BODY_QUERY_KEY: () => ["bodies"],
};

export const useBodiesGet = () => {
  return useQuery({
    queryKey: BODY_QUERY_KEY.BODY_QUERY_KEY(),
    queryFn: () => getBodies(),
  });
};
