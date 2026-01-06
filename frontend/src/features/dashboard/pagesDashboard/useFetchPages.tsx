import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/lib/axiosInstance";
const useFetchPages = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pages"],
    queryFn: async () => {
      const response = await api.get("/pages");
      return response?.data;
    },
  });
  return { data, isLoading, error };
};

export default useFetchPages;
