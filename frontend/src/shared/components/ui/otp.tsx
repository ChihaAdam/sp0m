import { useRef, useState } from "react";

type OTPProps = {
  setValue: (value: string) => void;
};

export default function OTP({ setValue }: OTPProps) {
  const length = 6;
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const refs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = value.slice(-1); // keep only last char
    setValues(newValues);

    const otp = newValues.join("");
    setValue(otp);
    if (value && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2">
      {values.map((val, i) => (
        <input
          key={i}
          ref={(el) => {
            if (el) refs.current[i] = el;
          }}
          className="w-12 h-12 text-center border border-gray-300 rounded"
          value={val}
          onChange={(e) => handleChange(i, e.target.value)}
        />
      ))}
    </div>
  );
}
