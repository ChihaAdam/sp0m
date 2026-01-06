import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/lib/axiosInstance";

export const useMetrics = () => {
  return useQuery({
    queryKey: ["metrics"],
    queryFn: async () => {
      const response = await api.get("/pages/metrics");
      return response.data.metrics;
    },
  });
};
