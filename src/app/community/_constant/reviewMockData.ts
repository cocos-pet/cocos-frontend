export const sampleReviewData = {
  reviewCount: 2,
  cursorId: 102,
  reviews: [
    {
      id: 101,
      memberId: 2001,
      nickname: "멍멍이사랑해",
      breedName: "푸들",
      petDisease: "피부병",
      petAge: 3, // notion 명세에 없음
      vistitedAt: "2025-04-01",
      hospitalId: 10,
      hospitalName: "행복한동물병원",
      hospitalAddress: "서울특별시 강남구 도곡로 123",
      content:
        "친절하고 꼼꼼하게 진료해주셨어요. 재방문의사 100%친절하고 꼼꼼하게 진료해주셨어요. 재방문의사 100%친절하고 꼼꼼하게 진료해주셨어요. 재방문의사 100%친절하고 꼼꼼하게 진료해주셨어요. 재방문의사 100%친절하고 꼼꼼하게 진료해주셨어요. 재방문의사 100%친절하고 꼼꼼하게 진료해주셨어요. 재방문의사 100%",
      goodReviews: [
        { id: 1, name: "친절해요" },
        { id: 2, name: "설명이 자세해요" },
      ],
      badReviews: [{ id: 3, name: "기다림이 길어요" }],
      images: [
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
      ],
      symptoms: [
        { id: 101, name: "기침" },
        { id: 102, name: "호흡곤란" },
      ],
      diseases: [{ id: 201, name: "심장병" }],
      animal: "강아지",
      gender: "여아",
      breed: "푸들",
      weight: 4.2,
    },
    {
      id: 102,
      memberId: 2002,
      nickname: "고양이집사",
      breedName: "페르시안",
      petDisease: "요로결석",
      petAge: 3, // notion 명세에 없음
      vistitedAt: "2025-03-15",
      hospitalId: 11,
      hospitalName: "사랑동물병원",
      hospitalAddress: "서울특별시 서초구 서초대로 456",
      content: "24시간 운영이라 긴급한 상황에 도움이 되었어요.",
      goodReviews: [
        { id: 4, name: "24시간 운영" },
        { id: 5, name: "응급처치가 빨라요" },
      ],
      badReviews: [{ id: 6, name: "비용이 비싸요" }],
      images: [
        "https://cocos-member-data.s3.ap-northeast-2.amazonaws.com/135/post/2be4fb07-920f-4d16-a26e-c739a733a5f8IMG_8279.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250504T182039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIASE5KQ5TDIVPOSNP6%2F20250504%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7070d7fe1231d6a3508003446a80f52641abf7ccafd52feb0ff3aa0571802e76",
      ],
      symptoms: [
        { id: 103, name: "소변보기 힘들어함" },
        { id: 104, name: "배가 아파보임" },
      ],
      diseases: [{ id: 202, name: "요로결석" }],
      animal: "고양이",
      gender: "남아",
      breed: "페르시안",
      weight: 3.8,
    },
  ],
} as const;
