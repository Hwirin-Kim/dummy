import { useMutation } from "@tanstack/react-query";
import { LoginPayload, login } from "../api/auth";
import { useNavigate } from "react-router-dom";

interface LoginResponse {
  accessToken: string;
  adminId: number;
  admin_name: string;
  admin_type: string;
  refreshToken: string;
  status: number;
}

export const useLogin = () => {
  const navigation = useNavigate();
  return useMutation({
    mutationFn: (req: LoginPayload) => login(req),
    onSuccess: (data: LoginResponse) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      navigation("/main");
    },
    onError: (error) => {
      alert("에러발생");
      console.error(error);
    },
  });
};
