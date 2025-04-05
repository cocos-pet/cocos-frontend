export const formatTime = (createdAt: string | undefined): string => {
  if (!createdAt) return "";

  // Use a fixed reference time for server-side rendering to avoid hydration issues
  const now = typeof window !== "undefined" ? new Date() : new Date(0);
  const createdDate = new Date(createdAt);

  const diffMs = now.getTime() - createdDate.getTime(); // 현재 시간에서 작성 시간 차이 계산
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 60) {
    return "방금 전";
  } else if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전`;
  } else if (diffDays < 7) {
    return `${diffDays}일 전`;
  } else {
    // 작성 날짜 포맷 - use a consistent format that doesn't depend on locale
    const createdYear = createdDate.getFullYear();
    const createdMonth = String(createdDate.getMonth() + 1).padStart(2, "0");
    const createdDay = String(createdDate.getDate()).padStart(2, "0");
    return `${createdYear}.${createdMonth}.${createdDay}`;
  }
};
