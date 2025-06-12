import { useQuery } from "@tanstack/react-query";
import { getBodyParts, getPopular } from ".";

export const MAIN_QUERY_KEY = {
  POST_POPULAR_LIST: () => ["postPopularList"],
  BODY_PARTS_KEY: (petProblem: "DISEASE" | "SYMPTOM") => ["body", petProblem],
  GET_HOT_HOSPITALS: () => ["hotHospitals"],
};

export const useQueryGetPopular = () => {
  return useQuery({
    queryKey: [MAIN_QUERY_KEY.POST_POPULAR_LIST],
    queryFn: () => getPopular(),
  });
};

export const useGetBodyParts = (petProblem: "DISEASE" | "SYMPTOM") => {
  return useQuery({
    queryKey: MAIN_QUERY_KEY.BODY_PARTS_KEY(petProblem),
    queryFn: () => getBodyParts(petProblem),
  });
};
