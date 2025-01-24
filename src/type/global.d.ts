//필요할 때 여기에 정의

import { AxiosError } from "axios";

interface CustomAxiosErrorData {
  code: number; // 서버에서 반환한 에러 코드
  message: string; // 서버에서 반환한 에러 메시지
}

export interface CustomAxiosError extends AxiosError {
  response?: {
    data: CustomAxiosErrorData; // 에러 응답 데이터 타입 지정
  };
}
