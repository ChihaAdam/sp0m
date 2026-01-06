import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/lib/axiosInstance";
import type { AxiosError } from "axios";
const useFetchUserInfo = () => {
  const { data, isLoading, error } = useQuery<any, AxiosError>({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const response = await api.get("/users/me");
      return response.data;
    },
  });
  return { data, isLoading, error };
};

export default useFetchUserInfo;
