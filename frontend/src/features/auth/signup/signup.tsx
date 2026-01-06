import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { apiWithCredentials } from "../../../shared/lib/axiosInstance";
import { AlertCircleIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { REGEX_EMAIL } from "../../../../../constants.mjs";
const schema = z.object({
  username: z.string().min(4).max(16),
  email: z.string().regex(REGEX_EMAIL),
  password: z.string().min(6),
});

type inputType = z.infer<typeof schema>;
function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<inputType>();
  const [serverError, setServerError] = useState<string>("");
  const onSubmit: SubmitHandler<inputType> = async (data) => {
    try {
      setServerError("");
      const response = await apiWithCredentials.post("/users/register", data);
      const key = response.data.verificationKey;
      navigate(`/verification?key=${key}`);
      console.log(response.data);
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
        welcome to sp0m
      </h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        {...register("username", { required: "Username is required" })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.username && (
        <div className="text-red-500 font-semibold flex items-center gap-2">
          <AlertCircleIcon />
          {errors.username.message}
        </div>
      )}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        {...register("email", { required: "Email is required" })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.email && (
        <div className="text-red-500 font-semibold flex items-center gap-2">
          <AlertCircleIcon />
          {errors.email.message}
        </div>
      )}
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        {...register("password", { required: "Password is required" })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.password && (
        <div className="text-red-500 font-semibold flex items-center gap-2">
          <AlertCircleIcon />
          {errors.password.message}
        </div>
      )}
      <button
        type="submit"
        className="bg-gradiant text-white text-xl font-bold p-2 rounded-lg disabled:contrast-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Registering..." : "Register"}
      </button>
      <Link
        to="/login"
        className="text-md font-semibold text-blue-800 hover:underline underline-offset-4"
      >
        Already have an account? login!
      </Link>
      {serverError && (
        <div className="text-red-500 flex items-center gap-2 border border-red-500 p-2 rounded">
          <AlertCircleIcon />
          {serverError}
        </div>
      )}
    </form>
  );
}

export default Signup;
