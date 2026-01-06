import Account from "./account/account";
import Appearance from "./appearance/appearance";
function Settings() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-2xl font-bold text-transparent bg-gradiant bg-clip-text">
        Settings
      </h2>
      <Appearance />
      <Account />
    </div>
  );
}

export default Settings;
