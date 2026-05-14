"use client";

import { AlarmCategory, NotificationItem, NotificationType } from "@api/domain/alarm";
import { useInfiniteNotifications, useReadNotification } from "@api/domain/alarm/hook";
import { IcCocosmagazine, IcCocosmagazineTrue, IcLikeActive, IcMessageFalse, IcMessageTrue } from "@asset/svg";
import Loading from "@common/component/Loading/Loading";
import WarningToastWrap from "@common/component/WarnningToastWrap/WarningToastWrap";
import { PATH } from "@route/path";
import { useRouter } from "next/navigation";
import { SVGProps, useEffect, useRef } from "react";
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
  postId: number | null;
  targetId: number | null;
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
  MAGAZINE_PUBLISHED: { read: IcCocosmagazine, unread: IcCocosmagazineTrue },
};

const isNotificationType = (type: string): type is NotificationType => {
  return (
    type === "COMMENT" || type === "SUB_COMMENT" || type === "POST_LIKE_MILESTONE" || type === "MAGAZINE_PUBLISHED"
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
      postId: notification.postId,
      targetId: notification.targetId,
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
    postId: notification.postId,
    targetId: notification.targetId,
  };
};

const getAlarmNavigationPath = (alarm: AlarmItem): string | null => {
  if (
    (alarm.type === "COMMENT" || alarm.type === "SUB_COMMENT" || alarm.type === "POST_LIKE_MILESTONE") &&
    alarm.postId
  ) {
    return `${PATH.COMMUNITY.ROOT}/${alarm.postId}`;
  }

  if (alarm.type === "MAGAZINE_PUBLISHED") {
    if (alarm.postId) {
      return `${PATH.COMMUNITY.ROOT}/${alarm.postId}`;
    }
    return PATH.COMMUNITY.ROOT;
  }

  if (alarm.postId) {
    return `${PATH.COMMUNITY.ROOT}/${alarm.postId}`;
  }

  return null;
};

export default function AlarmList({ category }: AlarmListProps) {
  const router = useRouter();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const { mutateAsync: readNotification } = useReadNotification();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending, isError } = useInfiniteNotifications(category);
  const notifications: NotificationItem[] = data?.pages.flatMap((page) => page.data.notifications) ?? [];
  const alarmList: AlarmItem[] = notifications.map((notification) =>
    mapNotificationToAlarmItem(notification, category),
  );

  useEffect(() => {
    const element = loadMoreRef.current;
    if (!element || !hasNextPage) return;

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

    observerRef.current = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isPending) return <Loading height={80} />;
  if (isError) return <WarningToastWrap errorMessage="알림을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요." />;

  return (
    <div className={styles.listContainer}>
      {alarmList.map((alarm, index) => {
        const isLastItem = index === alarmList.length - 1;
        const Icon =
          category === "MAGAZINE"
            ? alarm.isRead
              ? IcCocosmagazine
              : IcCocosmagazineTrue
            : alarm.type === "UNKNOWN"
              ? IcMessageFalse
              : alarm.isRead
                ? ALARM_ICON[alarm.type].read
                : ALARM_ICON[alarm.type].unread;
        const sourceClassName = !alarm.isRead ? styles.sourceTextHighlight : styles.sourceText;
        const nextPath = getAlarmNavigationPath(alarm);

        const handleAlarmClick = async () => {
          if (!nextPath) return;

          try {
            if (!alarm.isRead) {
              await readNotification(alarm.id);
            }
            router.push(nextPath);
          } catch (error) {
            console.error(error);
          }
        };

        return (
          <div
            key={alarm.id}
            className={`${styles.alarmItem} ${alarm.isRead ? styles.alarmItemRead : ""}`}
            onClick={handleAlarmClick}
            style={{ cursor: nextPath ? "pointer" : "default" }}
          >
            <div
              className={`${styles.leftSection} ${alarm.isRead ? styles.leftSectionRead : ""} ${isLastItem ? styles.leftSectionLast : ""}`}
            >
              <div className={styles.metaRow}>
                <Icon width={18} height={18} />
                <span className={sourceClassName}>{alarm.source}</span>
              </div>
              {category === "MAGAZINE" ? (
                <>
                  <p className={styles.description}>{alarm.description}</p>
                  <p className={`${styles.magazineTitle} ${alarm.isRead ? styles.readText : ""}`}>{alarm.title}</p>
                </>
              ) : (
                <>
                  <p className={`${styles.title} ${alarm.isRead ? styles.readText : ""}`}>{alarm.title}</p>
                  <p className={styles.myDescription}>{alarm.description}</p>
                </>
              )}
            </div>
          </div>
        );
      })}
      {hasNextPage && (
        <div ref={loadMoreRef} className={styles.loadMoreTrigger}>
          {isFetchingNextPage && <Loading height={40} />}
        </div>
      )}
    </div>
  );
}
