import { apiWithCredentials } from "../../shared/lib/axiosInstance.ts";

type refreshType = () => Promise<string | null>;

export const refresh: refreshType = async () => {
  const response = await apiWithCredentials.get("/refresh");
  return response.data.accessToken;
};
