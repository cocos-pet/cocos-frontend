'use client';

// 클라이언트 측에서도 환경 변수에 접근할 수 있도록 public으로 설정된 환경 변수 사용
export const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=openid`;
