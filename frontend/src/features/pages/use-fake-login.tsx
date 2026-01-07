import { useParams } from "react-router-dom";
import { api } from "../../shared/lib/axiosInstance";

export type Credentials = {
  login: string;
  password: string;
};

export function useFakeLogin() {
  const { id } = useParams();
  const login = async (credentials: Credentials) => {
    try {
      const response = await api.post(`fakeLogin/${id}`, credentials);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return login;
}
