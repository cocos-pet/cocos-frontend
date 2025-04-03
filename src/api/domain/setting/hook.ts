import { useMutation } from "@tanstack/react-query";
import { postLogout } from ".";
import { useRouter } from "next/navigation";

const LOGOUT_QUERY_KEY = {
  LOGOUT_MEMEBER: () => ["logout"],
};

export const useLogout = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: LOGOUT_QUERY_KEY.LOGOUT_MEMEBER(),
    mutationFn: postLogout,
    onSuccess: () => {
      localStorage.removeItem("user");
      router.push("/login");
    },
  });
};
