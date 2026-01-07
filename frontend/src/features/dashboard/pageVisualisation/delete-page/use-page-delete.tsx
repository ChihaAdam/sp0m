import { useMutation } from "@tanstack/react-query";
import { api } from "../../../../shared/lib/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
type UsePageDeleteProps = {
  id: string;
};
export function usePageDelete({ id }: Readonly<UsePageDeleteProps>) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation<any, AxiosError>({
    mutationFn: async () => {
      const response = await api.delete(`/pages/${id}`);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Page deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["pages"] });
      queryClient.invalidateQueries({ queryKey: ["metrics"] });
      navigate("/admin");
    },
    onError: () => {
      toast.error("Failed to delete page");
    },
  });
  return mutation;
}
