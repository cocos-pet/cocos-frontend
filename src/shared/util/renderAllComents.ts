interface Comment {
  postTitle?: string;
  postId?: number; // 게시글 ID
  id?: number; // 댓글 ID
  content?: string; // 댓글 내용
  createdAt?: string; // 생성 시간 (형식: YYYY-MM-DD:HH-MM-SS)
}

interface SubComment {
  postTitle?: string;
  postId?: number; // 게시글 ID
  id?: number; // 대댓글 ID
  mentionedNickname?: string; // 멘션된 닉네임
  content?: string; // 대댓글 내용
  createdAt?: string; // 생성 시간 (형식: YYYY-MM-DD:HH-MM-SS)
}

export const isSubComment = (data: Comment | SubComment): data is SubComment => {
  return (data as SubComment).mentionedNickname !== undefined;
};

//댓글, 대댓글 최신순으로 합쳐서 반환해주는 유틸 함수
export const renderAllComments = (comment?: Comment[], subComment?: SubComment[]): (Comment | SubComment)[] => {
  if (comment && subComment) {
    const allComments = [...comment, ...subComment].sort(
      (a, b) => new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime(),
    );
    return allComments;
  }
  if (comment && !subComment) {
    return comment.sort(
      (a, b) => new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime(),
    );
  }

  if (subComment && !comment) {
    return subComment.sort(
      (a, b) => new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime(),
    );
  }
};
