import { useMutation } from "@tanstack/react-query";
import { deleteWithdraw, postLogout } from ".";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";
import { useAuth } from "@providers/AuthProvider";

const LOGOUT_QUERY_KEY = {
  LOGOUT_MEMEBER: () => ["logout"],
};

export const useLogout = () => {
  const router = useRouter();
  const { logout } = useAuth();
  return useMutation({
    mutationKey: LOGOUT_QUERY_KEY.LOGOUT_MEMEBER(),
    mutationFn: postLogout,
    onSuccess: () => {
      logout();
      router.push(PATH.LOGIN);
    },
  });
};

export const useWithdraw = () => {
  const router = useRouter();
  const { logout } = useAuth();
  return useMutation({
    mutationFn: deleteWithdraw,
    onSuccess: () => {
      logout();
      router.push(PATH.MAIN);
    },
  });
};
