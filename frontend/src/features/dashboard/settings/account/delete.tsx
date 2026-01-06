import { Trash2 } from "lucide-react";
function Delete() {
  return (
    <button className="bg-red-500 text-white p-2 rounded-lg flex-1 hover:bg-red-400 flex items-center justify-center gap-2">
      <Trash2 />
      Delete Account
    </button>
  );
}
export default Delete;
