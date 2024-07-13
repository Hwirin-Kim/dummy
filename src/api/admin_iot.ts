import { api } from "./axios";

export const unLock = async (bikeId: string) => {
  const { data } = await api.post(`/admin-iot/unlock?bike_id=${bikeId}`);
  return data;
};
