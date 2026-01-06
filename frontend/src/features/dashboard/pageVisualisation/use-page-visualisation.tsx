import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "../../../shared/lib/axiosInstance";
type UsePageVisualisationProps = {
  id: string;
};
export function usePageVisualisation({ id }: UsePageVisualisationProps) {
  const { data, isLoading, error } = useQuery<any, AxiosError>({
    queryKey: ["page", id],
    queryFn: async () => {
      const response = await api.get(`/pages/${id}`);
      return response.data;
    },
  });
  return { data, isLoading, error };
}
