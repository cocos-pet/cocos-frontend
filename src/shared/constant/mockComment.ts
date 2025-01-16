/* 댓글 렌더링용 목데이터예요 지울예정입니다 */
const mockComments = [
  {
    id: 1,
    profileImage: "https://via.placeholder.com/150",
    nickname: "댕댕이주인",
    breed: "포메라니안",
    petAge: 3,
    content: "우리 강아지는 너무 귀여워요!",
    createdAt: new Date("2025-01-15T14:30:00"),
    isWriter: true,
    subComments: [
      {
        id: 101,
        profileImage: "https://via.placeholder.com/150",
        nickname: "반려동물사랑해",
        breed: "비숑프리제",
        petAge: 2,
        content: "정말 귀엽네요! 사진 더 올려주세요~",
        createdAt: new Date("2025-01-15T15:00:00"),
        isWriter: false,
        mentionedNickname: "댕댕이주인",
      },
      {
        id: 102,
        profileImage: "https://via.placeholder.com/150",
        nickname: "냥냥이주인",
        breed: "스코티시폴드",
        petAge: 4,
        content: "포메라니안 정말 사랑스러워요!",
        createdAt: new Date("2025-01-15T16:00:00"),
        isWriter: false,
        mentionedNickname: "반려동물사랑해",
      },
    ],
  },
  {
    id: 2,
    profileImage: "https://via.placeholder.com/150",
    nickname: "고양이사랑해",
    breed: "페르시안",
    petAge: 5,
    content: "우리 고양이는 자꾸 말썽부려요.",
    createdAt: new Date("2025-01-14T12:00:00"),
    isWriter: true,
    subComments: [
      {
        id: 201,
        profileImage: "https://via.placeholder.com/150",
        nickname: "냥냥이주인",
        breed: "러시안블루",
        petAge: 3,
        content: "@고양이사랑해 고양이는 원래 그래요! 너무 귀엽네요!",
        createdAt: new Date("2025-01-14T13:00:00"),
        isWriter: false,
        mentionedNickname: "고양이사랑해",
      },
    ],
  },
];

export default mockComments;
