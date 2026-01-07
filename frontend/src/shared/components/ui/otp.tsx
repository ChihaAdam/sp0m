import { useRef, useState } from "react";

type OtpProps = {
  setValue: (value: string) => void;
};

type otpField = {
  value: string;
  key: `${string}-${string}-${string}-${string}-${string}`;
};

function generateOtpFields(length: number): otpField[] {
  let arrayOfOtpFields = new Array(length);
  for (let i = 0; i < length; i++) {
    arrayOfOtpFields[i] = {
      value: "",
      key: crypto.randomUUID(),
    };
  }
  return arrayOfOtpFields;
}

export default function Otp({ setValue }: Readonly<OtpProps>) {
  const length = 6;
  const [fields, setFields] = useState<otpField[]>(generateOtpFields(length));
  const refs = useRef<HTMLInputElement[]>([]);
  const handleChange = (index: number, value: string) => {
    const newFields = [...fields];
    newFields[index].value = value.slice(-1); // keep only last character
    setFields(newFields);
    const otp = newFields.map((field) => field.value).join("");
    setValue(otp);
    if (value && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2">
      {fields.map((element, i) => (
        <input
          key={element.key}
          ref={(el) => {
            if (el) refs.current[i] = el;
          }}
          className="w-12 h-12 text-center border border-gray-300 rounded"
          value={element.value}
          onChange={(e) => handleChange(i, e.target.value)}
        />
      ))}
    </div>
  );
}
