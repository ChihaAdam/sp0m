import {
  MAX_USERNAME_LENGTH,
  MIN_USERNAME_LENGTH,
} from "../../../../../../constants.mjs";
import { useChangeUsername } from "./mutations";
import { useState } from "react";
function ChangeUsername() {
  const [username, setUsername] = useState("");
  const finalUsername = username.trim();
  const disabled =
    finalUsername.length < MIN_USERNAME_LENGTH ||
    finalUsername.length > MAX_USERNAME_LENGTH;
  const changeUsernameMutation = useChangeUsername();
  const handleSubmit = () => {
    changeUsernameMutation.mutate(finalUsername);
    setUsername("");
  };
  return (
    <div className="flex flex-col gap-2 w-1/2">
      <h4>Change Username:</h4>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="New Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-lg hover:bg-white focus:bg-white p-2 bg-amber-50"
        />
        <button
          className="bg-amber-500 text-white p-2 rounded-lg hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={disabled}
          onClick={handleSubmit}
        >
          Change Username
        </button>
      </div>
    </div>
  );
}
export default ChangeUsername;
