import { InfiniteData, useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AlarmCategory, getNotifications, GetNotificationsResponse, readNotification } from "./index";

interface NotificationCursor {
  cursorCreatedAt?: string;
  cursorId?: number;
}

export const ALARM_QUERY_KEY = {
  LIST: (category: AlarmCategory) => ["notifications", category] as const,
};

export const useInfiniteNotifications = (category: AlarmCategory) => {
  return useInfiniteQuery<
    GetNotificationsResponse,
    Error,
    InfiniteData<GetNotificationsResponse>,
    ReturnType<typeof ALARM_QUERY_KEY.LIST>,
    NotificationCursor
  >({
    queryKey: ALARM_QUERY_KEY.LIST(category),
    initialPageParam: {},
    queryFn: ({ pageParam }) =>
      getNotifications({
        category,
        cursorCreatedAt: pageParam.cursorCreatedAt,
        cursorId: pageParam.cursorId,
      }),
    getNextPageParam: (lastPage) => {
      const { cursorCreatedAt, cursorId, notifications } = lastPage.data;
      if (!notifications?.length || !cursorCreatedAt || cursorId == null) return undefined;
      return { cursorCreatedAt, cursorId };
    },
  });
};

export const useReadNotification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["notifications", "read"],
    mutationFn: (notificationId: number) => readNotification(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
};
