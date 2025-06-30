import { useQuery } from "@tanstack/react-query";
import { getLocation, getMemberLocation } from "./index";

export const QUERY_KEY = {
  LOCATION: "location",
  MEMBER_LOCATION: "memberLocation",
} as const;

export const useGetLocation = () => {
  return useQuery({
    queryKey: [QUERY_KEY.LOCATION],
    queryFn: () => getLocation(),
  });
};

export const useGetMemberLocation = () => {
  return useQuery({
    queryKey: [QUERY_KEY.MEMBER_LOCATION],
    queryFn: () => getMemberLocation(),
  });
};
