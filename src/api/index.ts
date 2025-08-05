import axios from "axios";

export const getAccessToken = (): string | null => {
  const user = localStorage.getItem("user");
  if (user) {
    try {
      const userObj = JSON.parse(user);
      return userObj.accessToken || "";
    } catch (error) {
      console.log(error);
    }
  }
  return "";
};

export const isLoggedIn = (): boolean => {
  const user = localStorage.getItem("user");
  if (user) {
    try {
      const userObj = JSON.parse(user);
      if (userObj.accessToken) return true;
    } catch (e) {
      console.log(e);
    }
  }
  return false;
};

const getApiBasePath = (): string => {
  return process.env.NEXT_PUBLIC_DEPLOY_ENV === "prod"
    ? "https://www.cocos.r-e.kr/api/prod"
    : "https://www.cocos-dev.r-e.kr/api/dev";
};

export const api = axios.create({
  baseURL: getApiBasePath(),
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  config.headers.Authorization = token ? `Bearer ${token}` : "";

  return config;
});

// todo: 추후 토큰 만료 상태 코드 오면, 그에 알맞은 로직 작성하기.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  },
);

//더욱 빠르게 api 요청을 할 수 있도록 작성된 유틸 함수
export const get = <T>(...args: Parameters<typeof api.get>) => {
  return api.get<T>(...args);
};

export const post = <T>(...args: Parameters<typeof api.post>) => {
  return api.post<T>(...args);
};

export const patch = <T>(...args: Parameters<typeof api.patch>) => {
  return api.patch<T>(...args);
};

export const put = <T>(...args: Parameters<typeof api.put>) => {
  return api.put<T>(...args);
};

export const del = <T>(...args: Parameters<typeof api.delete>) => {
  return api.delete<T>(...args);
};
