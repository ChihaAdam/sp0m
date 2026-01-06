import { useSignout } from "./mutations";
import { UserCog } from "lucide-react";
function Signout() {
  const signout = useSignout();
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-lg flex-1 hover:bg-blue-400 flex items-center justify-center gap-2"
      onClick={signout}
    >
      <UserCog />
      Signout
    </button>
  );
}
export default Signout;
