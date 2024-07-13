import { api } from "./axios";

export interface LoginPayload {
  loginId: string;
  password: string;
}

export const login = async (payload: LoginPayload) => {
  const { data } = await api.post("/admin/login", payload);
  return data;
};
