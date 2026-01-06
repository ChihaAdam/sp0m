import { useState } from "react";
import OTP from "../../../shared/components/ui/otp.tsx";
import useVerification from "./use-verification";
import { AlertCircle } from "lucide-react";

function Verification() {
  const [otp, setOtp] = useState<string>("");

  const invalidInput = otp.length !== 6;
  const { handleSubmit, loading, error } = useVerification();
  return (
    <main className="flex flex-col gap-4 max-w-2xl mx-auto p-6 items-center rounded-lg border-gray-300 dark:border-gray-700 shadow-lg transition-shadow mt-36">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradiant">
        one step further
      </h2>
      <p>Enter the verification code sent to your email</p>
      <OTP setValue={setOtp} />
      <button
        className="text-2xl font-bold bg-gradiant p-2 rounded-lg text-white w-full disabled:contrast-50 disabled:cursor-not-allowed"
        disabled={invalidInput || loading}
        onClick={() => handleSubmit(otp)}
      >
        {loading ? "Verifying..." : "Verify"}
      </button>
      {error && (
        <div className="flex items-center gap-2 text-red-500 border-red-500 border p-2 rounded-lg w-full">
          <AlertCircle className="inline" />
          <p>{error}</p>
        </div>
      )}
    </main>
  );
}

export default Verification;
