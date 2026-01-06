import { Link } from "react-router-dom";
function Return() {
  return (
    <Link
      to="/"
      className="text-2xl font-bold bg-gradiant text-white shadow-lg
                     hover:shadow-xl transition-all duration-300 ease-in-out 
                     hover:-translate-y-1 active:translate-y-2 active:shadow-md px-6 py-2 rounded-lg"
    >
      Go to home
    </Link>
  );
}

export default Return;
