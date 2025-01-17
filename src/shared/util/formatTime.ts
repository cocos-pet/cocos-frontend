export const formatTimeAgo = (createdAt: string): string => {
  const now = new Date(); // 현재 시간
  const createdDate = new Date(createdAt); // 입력된 시간
  const diffMs = now.getTime() - createdDate.getTime(); // 밀리초 단위 시간 차이
  const diffSeconds = Math.floor(diffMs / 1000); // 초 단위
  const diffMinutes = Math.floor(diffSeconds / 60); // 분 단위
  const diffHours = Math.floor(diffMinutes / 60); // 시간 단위
  const diffDays = Math.floor(diffHours / 24); // 일 단위

  if (diffSeconds < 60) {
    return "방금 전"; // 1분 미만
  } else if (diffMinutes < 60) {
    return `${diffMinutes}분 전`; // 1분 이상 ~ 59분 이하
  } else if (diffHours < 24) {
    return `${diffHours}시간 전`; // 1시간 이상 ~ 24시간 미만
  } else if (diffDays < 7) {
    return `${diffDays}일 전`; // 1일 이상 ~ 6일 이하
  } else {
    const createdYear = createdDate.getFullYear();
    const nowYear = now.getFullYear();

    // 7일 이상
    if (nowYear === createdYear) {
      // 같은 해일 경우 YYYY.MM.DD
      return createdDate.toISOString().split("T")[0].replace(/-/g, ".");
    } else {
      // 다른 해일 경우 YYYY.MM.DD
      return createdDate.toISOString().split("T")[0].replace(/-/g, ".");
    }
  }
};
