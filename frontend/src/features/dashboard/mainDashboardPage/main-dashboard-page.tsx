import { useState } from "react";
import { SidebarIcon, SidebarCloseIcon } from "lucide-react";
import { Outlet } from "react-router-dom";
import Aside from "./aside";
import Navbar from "../../navbar/navbar";
import UserCard from "./user-card";
function MainDashboardPage() {
  const [active, setActive] = useState(true);
  return (
    <main className="flex flex-col  min-h-screen">
      <Navbar>
        <UserCard />
      </Navbar>
      <div className="flex gap-4 h-full flex-1 ">
        <div className="flex-0 flex gap-4 items-start">
          <Aside active={active} setActive={setActive} />
          <button onClick={() => setActive(!active)} className="py-4">
            {active ? <SidebarCloseIcon /> : <SidebarIcon />}
          </button>
        </div>
        <div className="flex-1 py-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
export default MainDashboardPage;
