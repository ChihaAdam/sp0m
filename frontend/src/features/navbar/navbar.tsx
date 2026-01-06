import { useNavigate } from "react-router-dom";

function Nav({ children }: { children?: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-40 flex justify-between items-center text-white p-4 bg-gradiant-blur">
      <div
        className="flex items-center gap-2 select-none cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src="../../public/favicon.svg"
          alt="favicon"
          className="w-14 h-14"
        />
        <div>
          <h1 className="text-3xl font-bold">sp0m</h1>
          <h3 className="text-lg font-bold text-gray-200/70">be the Joker</h3>
        </div>
      </div>
      {children}
    </header>
  );
}

export default Nav;
