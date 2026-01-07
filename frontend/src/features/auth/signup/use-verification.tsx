import { useState } from "react";
import { api } from "../../../shared/lib/axiosInstance";
import { useAuthStore } from "../auth-provider";
import { useNavigate } from "react-router-dom";
function useVerification() {
  const navigate = useNavigate();
  const { setAccessToken } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const key = new URLSearchParams(window.location.search).get("key");
  const handleSubmit = async (otp: string) => {
    const code = Number(otp);
    try {
      setLoading(true);
      setError("");
      const response = await api.post(`/users/signup?key=${key}`, {
        code: code,
      });
      setAccessToken(response.data.token);
      navigate("/admin");
    } catch (error: any) {
      setError(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return { handleSubmit, loading, error };
}

export default useVerification;
