import { api, apiWithCredentials } from "../../../../shared/lib/axiosInstance";
import { useAuthStore } from "../../../../features/auth/auth-provider";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
export function useSignout() {
  const { setAccessToken } = useAuthStore();
  const signout = async () => {
    try {
      await apiWithCredentials.get("/users/signout");
      setAccessToken(null);
      toast.success("Signout successful");
    } catch (error) {
      toast.error("Signout failed");
      console.error(error);
    }
  };
  return signout;
}

export function useChangeUsername() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (username: string) => {
      await api.patch("/users/change-username", { username });
    },
    onSuccess: () => {
      toast.success("Username changed successfully");
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    },
    onError: () => {
      toast.error("Failed to change username");
    },
  });
  return mutation;
}

export function useChangePassword() {
  const mutation = useMutation({
    mutationFn: async (password: string) => {
      await api.patch("/users/change-password", { password });
    },
    onSuccess: () => {
      toast.success("Password changed successfully");
    },
    onError: () => {
      toast.error("Failed to change password");
    },
  });
  return mutation;
}
