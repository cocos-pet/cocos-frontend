export const formatTime = (createdAt: string): string => {
  const now = new Date(); // 현재 UTC 시간
  const createdDate = new Date(createdAt);

  const diffMs = createdDate.getTime() - now.getTime(); // UTC 기준으로 차이 계산

  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffYears = now.getFullYear() - createdDate.getFullYear();

  if (diffSeconds < 60) {
    return "방금 전";
  } else if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전`;
  } else if (diffDays < 7) {
    return `${diffDays}일 전`;
  } else if (diffYears < 1) {
    const createdYear = createdDate.getFullYear();
    const createdMonth = String(createdDate.getMonth() + 1).padStart(2, "0");
    const createdDay = String(createdDate.getDate()).padStart(2, "0");
    return `${createdYear}.${createdMonth}.${createdDay}`;
  } else {
    const createdYear = createdDate.getFullYear();
    const createdMonth = String(createdDate.getMonth() + 1).padStart(2, "0");
    const createdDay = String(createdDate.getDate()).padStart(2, "0");
    return `${createdYear}.${createdMonth}.${createdDay} d`;
  }
};
