import { API_PATH } from "@api/constants/apiPath";
import { get, patch } from "@api/index";

export type AlarmCategory = "MAGAZINE" | "MY";

export type NotificationType = "COMMENT" | "SUB_COMMENT" | "POST_LIKE_MILESTONE" | "MAGAZINE_PUBLISHED";

export interface NotificationItem {
  id: number;
  type: NotificationType;
  isRead: boolean;
  createdAt: string;
  postId: number | null;
  targetId: number | null;
  title: string;
  content: string;
  actorNickname: string | null;
  milestone: string | null;
  iconImageUrl: string | null;
}

export interface GetNotificationsRequest {
  category: AlarmCategory;
  cursorCreatedAt?: string;
  cursorId?: number;
}

export interface GetNotificationsResponse {
  code: number;
  message: string;
  data: {
    cursorCreatedAt: string | null;
    cursorId: number | null;
    notifications: NotificationItem[];
  };
}

export interface ReadNotificationResponse {
  code: number;
  message: string;
  data: null;
}

export const getNotifications = async (params: GetNotificationsRequest): Promise<GetNotificationsResponse> => {
  const response = await get<GetNotificationsResponse>(API_PATH.NOTIFICATIONS, { params });
  return response.data;
};

export const readNotification = async (notificationId: number): Promise<ReadNotificationResponse> => {
  const response = await patch<ReadNotificationResponse>(`${API_PATH.NOTIFICATIONS}/${notificationId}/read`);
  return response.data;
};

