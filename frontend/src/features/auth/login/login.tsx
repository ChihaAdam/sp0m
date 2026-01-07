import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { apiWithCredentials } from "../../../shared/lib/axiosInstance";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../auth-provider";
import { REGEX_EMAIL } from "../../../../../constants.mjs";
import ErrorComponent from "../error-component";
const schema = z.object({
  email: z.string().regex(REGEX_EMAIL),
  password: z.string().min(6),
});

type inputType = z.infer<typeof schema>;
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<inputType>();
  const [serverError, setServerError] = useState<string>("");
  const { setAccessToken } = useAuthStore();
  const onSubmit: SubmitHandler<inputType> = async (data) => {
    try {
      setServerError("");
      const response = await apiWithCredentials.post("/users/login", data);
      setAccessToken(response.data.accessToken);
    } catch (error: any) {
      setServerError(error?.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-2xl mx-auto p-6 rounded-lg border-gray-300 dark:border-gray-700 shadow-lg transition-shadow mt-36"
    >
      <h2 className="text-4xl font-bold bg-gradiant text-transparent bg-clip-text">
        welcome back
      </h2>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        {...register("email", { required: "please enter a valid email" })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <ErrorComponent message={errors?.email?.message} />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        {...register("password", { required: "Password is required" })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <ErrorComponent message={errors?.password?.message} />
      <button
        type="submit"
        className="bg-gradiant text-white text-xl font-bold p-2 rounded-lg disabled:contrast-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
      <Link
        to="/signup"
        className="text-md font-semibold text-blue-800 hover:underline underline-offset-4"
      >
        Don't have an account? join us!
      </Link>
      <ErrorComponent message={serverError} />
    </form>
  );
}

export default Login;
