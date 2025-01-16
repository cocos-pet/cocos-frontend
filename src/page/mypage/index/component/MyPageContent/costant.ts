import { ApiItemTypes } from "./MyPageContent";

export const dummyData1: ApiItemTypes[] = [];

export const dummyData: ApiItemTypes[] = [
  {
    id: 1,
    nickname: "User1",
    title: "First Post",
    content: "This is the content of the first post.",
    likeCount: 15,
    commentCount: 3,
    createdAt: "2025-01-15:10-30-00",
    updatedAt: "2025-01-15:11-00-00",
    image: "https://example.com/image1.jpg",
    category: "Free",
    breed: "골든리트리버",
    age: 12,
  },
  {
    id: 2,
    nickname: "User2",
    title: "Second Post",
    content: "Here is some content for the second post.",
    likeCount: 25,
    commentCount: 5,
    createdAt: "2025-01-14:09-00-00",
    updatedAt: "2025-01-14:09-30-00",
    image: "https://example.com/image2.jpg",
    category: "Discussion",
    breed: "골든리트리버",
    age: 12,
  },
  {
    id: 3,
    nickname: "User3",
    title: "Third Post",
    content: "Third post content goes here.",
    likeCount: 40,
    commentCount: 12,
    createdAt: "2025-01-13:08-15-00",
    updatedAt: "2025-01-13:08-45-00",
    image: "https://example.com/image3.jpg",
    category: "Announcement",
    breed: "골든리트리버",
    age: 12,
  },
  {
    id: 4,
    nickname: "User3",
    title: "Third Post",
    content: "Third post content goes here.",
    likeCount: 40,
    commentCount: 12,
    createdAt: "2025-01-13:08-15-00",
    updatedAt: "2025-01-13:08-45-00",
    image: "https://example.com/image3.jpg",
    category: "Announcement",
    breed: "골든리트리버",
    age: 12,
  },
  {
    id: 5,
    nickname: "User3",
    title: "Third Post",
    content: "Third post content goes here.",
    likeCount: 40,
    commentCount: 12,
    createdAt: "2025-01-13:08-15-00",
    updatedAt: "2025-01-13:08-45-00",
    image: "https://example.com/image3.jpg",
    category: "Announcement",
    breed: "골든리트리버",
    age: 12,
  },
  {
    id: 6,
    nickname: "User3",
    title: "Third Post",
    content: "Third post content goes here.",
    likeCount: 40,
    commentCount: 12,
    createdAt: "2025-01-13:08-15-00",
    updatedAt: "2025-01-13:08-45-00",
    image: "https://example.com/image3.jpg",
    category: "Announcement",
    breed: "골든리트리버",
    age: 12,
  },
  {
    id: 7,
    nickname: "User3",
    title: "Third Post",
    content: "Third post content goes here.",
    likeCount: 40,
    commentCount: 12,
    createdAt: "2025-01-13:08-15-00",
    updatedAt: "2025-01-13:08-45-00",
    image: "https://example.com/image3.jpg",
    category: "Announcement",
    breed: "골든리트리버",
    age: 12,
  },
];

interface Comment {
  postTitle: string;
  postId: number; // 게시글 ID
  id: number; // 댓글 ID
  content: string; // 댓글 내용
  createdAt: string; // 생성 시간 (형식: YYYY-MM-DD:HH-MM-SS)
}

interface SubComment {
  postTitle: string;
  postId: number; // 게시글 ID
  id: number; // 대댓글 ID
  mentionedNickname: string; // 멘션된 닉네임
  content: string; // 대댓글 내용
  createdAt: string; // 생성 시간 (형식: YYYY-MM-DD:HH-MM-SS)
}

interface Data {
  comments: Comment[]; // 댓글 목록
  subComments: SubComment[]; // 대댓글 목록
}

export const commentDummyData: Data = {
  comments: [
    {
      postTitle: "게시글의 제목1",
      postId: 1,
      id: 1,
      content: "내용",
      createdAt: "YYYY-MM-DD:HH-MM-SS",
    },
    {
      postTitle: "게시글의 제목1",
      postId: 1,
      id: 2,
      content: "내용2",
      createdAt: "YYYY-MM-DD:HH-MM-SS",
    },
  ],
  subComments: [
    {
      postTitle: "게시글의 제목1",
      postId: 1,
      id: 1,
      mentionedNickname: "리트리버사랑해",
      content: "호흡기 문제일 수 있는데 다른 증상은 없나요?",
      createdAt: "YYYY-MM-DD:HH-MM-SS",
    },
    {
      postTitle: "게시글의 제목1",
      postId: 1,
      id: 2,
      mentionedNickname: "닉네임2",
      content: "내용2",
      createdAt: "YYYY-MM-DD:HH-MM-SS",
    },
  ],
};
