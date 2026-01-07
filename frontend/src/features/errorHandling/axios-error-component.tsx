import type { AxiosError } from "axios";
import Return from "./return";

type AxiosErrorComponentProps = {
  error: AxiosError<{ message?: string }>;
};

function AxiosErrorComponent({ error }: Readonly<AxiosErrorComponentProps>) {
  let errorMessage;
  if (error.response)
    errorMessage = error.response.data?.message || "Something went wrong";
  else errorMessage = "request timeout";
  return (
    <div>
      <h2 className="text-2xl font-bold bg-grandiant text-transparent bg-clip-text">
        {errorMessage}
      </h2>
      <Return />
    </div>
  );
}

export default AxiosErrorComponent;
