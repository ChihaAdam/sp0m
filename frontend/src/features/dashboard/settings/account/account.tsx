import ChangePassword from "./change-password";
import ChangeUsername from "./change-username";
import Signout from "./signout";
import Delete from "./delete";
function Account() {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg bg-yellow-300/20">
      <div className="flex gap-2 items-center mb-2">
        <div className="size-4 bg-yellow-600 rounded-full"></div>
        <h3 className="text-xl font-bold text-yellow-600 p-0">account</h3>
      </div>
      <div className="flex flex-col gap-2">
        <ChangeUsername />
        <ChangePassword />
        <div className="flex gap-2 w-1/2 max-md:flex-col max-md:w-full mt-4">
          <Signout />
          <Delete />
        </div>
      </div>
    </div>
  );
}

export default Account;
