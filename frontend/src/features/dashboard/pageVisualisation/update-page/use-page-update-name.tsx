import { useMutation } from "@tanstack/react-query";
import { api } from "../../../../shared/lib/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";
type UsePageUpdateNameProps = {
  id: string;
  title: string;
};
export function usePageUpdateName() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation<
    UsePageUpdateNameProps,
    AxiosError,
    UsePageUpdateNameProps
  >({
    mutationFn: async ({ id, title }: UsePageUpdateNameProps) => {
      const response = await api.patch(`/pages/${id}`, { title: title });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Page name updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["pages"],
      });
      queryClient.invalidateQueries({
        queryKey: ["metrics"],
      });
      navigate("/admin");
    },
    onError: () => {
      toast.error("Failed to update page name");
    },
  });
  return mutation;
}
