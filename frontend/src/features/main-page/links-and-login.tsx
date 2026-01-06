import DarkModeToggle from "../darkmode/darkmode-toggle";
import Links from "./links";
import { useNavigate } from "react-router-dom";
function LinksAndLogin() {
  const navigate = useNavigate();
  return (
    <>
      <Links />
      <div className="flex items-center gap-2 max-md:flex-col max-md:items-center max-md:justify-center">
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200  max-md:text-sm"
        >
          Login
        </button>
        <DarkModeToggle />
      </div>
    </>
  );
}

export default LinksAndLogin;
