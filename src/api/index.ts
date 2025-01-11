import axios from "axios";

const getAccessToken = (): string | null => {
  const user = localStorage.getItem("user");
  if (user) {
    const userObj = JSON.parse(user);
    return userObj || "";
  }
  return "";
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  config.headers.Authorization = token ? `Bearer ${token}` : "";

  return config;
});
