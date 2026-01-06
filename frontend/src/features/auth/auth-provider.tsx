import { createContext, useContext, useLayoutEffect } from "react";
import { refresh } from "./refresh.ts";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../shared/components/ui/loading.tsx";
import { api } from "../../shared/lib/axiosInstance.ts";
type AuthStore = {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
};

const AuthContext = createContext<AuthStore | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  /*the token is originally null when mounted , that's why we use useEffect to generate a new token (if possible)
   */
  useEffect(() => {
    const checkToken = async () => {
      try {
        const newToken = await refresh();
        if (newToken) {
          setAccessToken(newToken);
        }
      } catch (error) {
        setAccessToken(null);
      }
      setLoading(false);
    };
    checkToken();
  }, []);

  //we use useLayoutEffect to make sure that the interceptors are added before the component is mounted
  useLayoutEffect(() => {
    //the request interceptor is used to add the access token to the request headers
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = accessToken;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    //the response interceptor is used to refresh the access token if the server returns a 401 status code
    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        //the original request is used to retry the request with the new access token
        const originalRequest = error.config;
        if (error.response?.status === 401) {
          return refresh()
            .then((newToken) => {
              if (newToken) {
                setAccessToken(newToken);
                originalRequest.headers.Authorization = newToken;
                originalRequest._retry = true;
                return api(originalRequest);
              }
            })
            .catch((error) => {
              if (error.response?.status === 401) {
                setAccessToken(null);
              }
              return Promise.reject(error);
            });
        }
        return Promise.reject(error);
      }
    );
    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);

  //we use loading to show a loading screen while the token is being generated (to prevent passing to protected routes)
  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthStore = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthStore must be used within an AuthProvider");
  }
  return context;
};
