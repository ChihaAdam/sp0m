import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../../shared/lib/axiosInstance";
import { toast } from "react-toastify";
function useChangeAvatar() {
  const queryClient = useQueryClient();
  const changeAvatarMutation = useMutation({
    mutationFn: async (avatarNumber: string) => {
      const response = await api.patch("/users/change-avatar", {
        avatarNumber,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userInfo"],
      });
      toast.success("Avatar changed successfully");
    },
    onError: () => {
      toast.error("Failed to change avatar");
    },
  });

  return changeAvatarMutation;
}

export default useChangeAvatar;
