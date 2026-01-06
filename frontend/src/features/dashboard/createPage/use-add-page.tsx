import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../shared/lib/axiosInstance";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
interface AddPageProps {
  title: string;
  type: string;
}
export function useAddPage() {
  const queryClient = useQueryClient();

  const mutation = useMutation<AddPageProps, AxiosError, AddPageProps>({
    mutationFn: async (pageData: AddPageProps) => {
      const response = await api.post(`/pages`, pageData);
      return response?.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pages"] });
      queryClient.invalidateQueries({ queryKey: ["metrics"] });
      toast.success("Page added successfully");
    },
    onError: () => {
      toast.error("Failed to add page");
    },
  });
  return mutation;
}
