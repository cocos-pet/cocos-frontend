"use client";

import { AlarmCategory, NotificationItem, NotificationType } from "@api/domain/alarm";
import { useInfiniteNotifications } from "@api/domain/alarm/hook";
import { IcCocosmagazine, IcLikeActive, IcMessageFalse, IcMessageTrue } from "@asset/svg";
import Loading from "@common/component/Loading/Loading";
import WarningToastWrap from "@common/component/WarnningToastWrap/WarningToastWrap";
import { SVGProps } from "react";
import * as styles from "./alarmList.css.ts";

interface AlarmListProps {
  category: AlarmCategory;
}

interface AlarmItem {
  id: number;
  source: string;
  title: string;
  description: string;
  type: NotificationType | "UNKNOWN";
  isRead: boolean;
}

const SOURCE_TEXT_BY_TYPE: Record<NotificationType, string> = {
  COMMENT: "새 댓글",
  SUB_COMMENT: "새 답글",
  POST_LIKE_MILESTONE: "새 반응",
  MAGAZINE_PUBLISHED: "코코스매거진",
};

type AlarmIconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;
type AlarmIconMap = Record<NotificationType, { read: AlarmIconComponent; unread: AlarmIconComponent }>;

const ALARM_ICON: AlarmIconMap = {
  COMMENT: { read: IcMessageFalse, unread: IcMessageTrue },
  SUB_COMMENT: { read: IcMessageFalse, unread: IcMessageTrue },
  POST_LIKE_MILESTONE: { read: IcLikeActive, unread: IcLikeActive },
  MAGAZINE_PUBLISHED: { read: IcCocosmagazine, unread: IcCocosmagazine },
};

const isNotificationType = (type: string): type is NotificationType => {
  return (
    type === "COMMENT" ||
    type === "SUB_COMMENT" ||
    type === "POST_LIKE_MILESTONE" ||
    type === "MAGAZINE_PUBLISHED"
  );
};

const mapNotificationToAlarmItem = (notification: NotificationItem, category: AlarmCategory): AlarmItem => {
  const source = isNotificationType(notification.type) ? SOURCE_TEXT_BY_TYPE[notification.type] : "새 소식";
  const type = isNotificationType(notification.type) ? notification.type : "UNKNOWN";

  if (category === "MAGAZINE") {
    return {
      id: notification.id,
      source,
      title: notification.content || notification.title,
      description: notification.title || notification.content,
      type,
      isRead: notification.isRead,
    };
  }

  return {
    id: notification.id,
    source,
    title: notification.title,
    description: notification.actorNickname
      ? `${notification.actorNickname}님의 댓글: ${notification.content}`
      : notification.content,
    type,
    isRead: notification.isRead,
  };
};

export default function AlarmList({ category }: AlarmListProps) {
  const { data, isPending, isError } = useInfiniteNotifications(category);
  const notifications: NotificationItem[] = data?.pages.flatMap((page) => page.data.notifications) ?? [];
  const alarmList: AlarmItem[] = notifications.map((notification) => mapNotificationToAlarmItem(notification, category));

  if (isPending) return <Loading height={80} />;
  if (isError) return <WarningToastWrap errorMessage="알림을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요." />;

  return (
    <div className={styles.listContainer}>
      {alarmList.map((alarm, index) => {
        const isLastItem = index === alarmList.length - 1;
        const Icon =
          category === "MAGAZINE"
            ? IcCocosmagazine
            : alarm.type === "UNKNOWN"
              ? IcMessageFalse
              : alarm.isRead
                ? ALARM_ICON[alarm.type].read
                : ALARM_ICON[alarm.type].unread;
        const sourceClassName = !alarm.isRead ? styles.sourceTextHighlight : styles.sourceText;

        return (
          <div key={alarm.id} className={styles.alarmItem}>
            <div className={`${styles.leftSection} ${isLastItem ? styles.leftSectionLast : ""}`}>
              <div className={styles.metaRow}>
                <Icon width={18} height={18} />
                <span className={sourceClassName}>{alarm.source}</span>
              </div>
              {category === "MAGAZINE" ? (
                <>
                  <p className={styles.description}>{alarm.description}</p>
                  <p className={styles.magazineTitle}>{alarm.title}</p>
                </>
              ) : (
                <>
                  <p className={styles.title}>{alarm.title}</p>
                  <p className={styles.myDescription}>{alarm.description}</p>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
