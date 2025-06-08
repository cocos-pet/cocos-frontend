import { useQuery } from "@tanstack/react-query";
import { getLocation } from "./index";

export const QUERY_KEY = {
  LOCATION: "location",
} as const;

export const useGetLocation = () => {
  return useQuery({
    queryKey: [QUERY_KEY.LOCATION],
    queryFn: () => getLocation(),
  });
};
