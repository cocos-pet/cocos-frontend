import { useMutation } from "@tanstack/react-query";
import { deleteWithdraw, postLogout } from ".";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";

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
      router.push(PATH.LOGIN);
    },
  });
};

export const useWithdraw = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: deleteWithdraw,
    onSuccess: ()=> {
      localStorage.clear()
      router.push(PATH.LOGIN);
    }
  })
}
