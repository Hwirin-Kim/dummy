import { useMutation } from "@tanstack/react-query";
import { unLock } from "../api/admin_iot";

export const useIotUnlock = () => {
  return useMutation({
    mutationFn: (req: string) => unLock(req),
    onSuccess: (data) => {
      console.log(data);
      alert("요청성공");
    },
    onError: (error) => {
      console.error(error);
      alert("요청실패");
    },
  });
};
