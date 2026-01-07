import {
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
} from "../../../../../../constants.mjs";
import { useState } from "react";
import { useChangePassword } from "./mutations";
import { toast } from "react-toastify";
function ChangePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const finalPassword = password.trim();
  const finalConfirmPassword = confirmPassword.trim();
  const disabled =
    finalPassword.length < MIN_PASSWORD_LENGTH ||
    finalPassword.length > MAX_PASSWORD_LENGTH ||
    finalConfirmPassword.length < MIN_PASSWORD_LENGTH ||
    finalConfirmPassword.length > MAX_PASSWORD_LENGTH;

  const changePasswordMutation = useChangePassword();
  const handleSubmit = () => {
    if (finalPassword !== finalConfirmPassword) {
      toast.error("Passwords do not match");
    } else {
      changePasswordMutation.mutate(finalPassword);
      setPassword("");
      setConfirmPassword("");
    }
  };
  return (
    <div className="flex flex-col gap-2 w-1/2 max-md:w-full">
      <h4 className="font-semibold">Change Password: </h4>
      <div className="flex gap-2 justify-between max-md:flex-col">
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-lg hover:bg-white focus:bg-white p-2 bg-amber-50"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border rounded-lg hover:bg-white focus:bg-white p-2 bg-amber-50"
        />
      </div>
      <button
        className="bg-amber-500 text-white p-2 rounded-lg hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={disabled}
        onClick={handleSubmit}
      >
        Change Password
      </button>
    </div>
  );
}

export default ChangePassword;
