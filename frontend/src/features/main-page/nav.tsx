import Links from "./links";
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center text-white p-4 bg-linear-to-r from-pink-700 to-purple-700">
      <div className="flex items-center gap-2">
        <img src="favicon.svg" alt="favicon" className="w-14 h-14" />
        <h1 className="text-3xl font-bold">sp0m</h1>
      </div>
      <Links />
      <button
        onClick={() => navigate("/login")}
        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
      >
        Login
      </button>
    </header>
  );
}

export default Nav;
