import type { AxiosError } from "axios";
import Return from "./return";

function AxiosErrorComponent({
  error,
}: {
  error: AxiosError<{ message?: string }>;
}) {
  let errorMessage;
  if (!error.response) errorMessage = "request timeout";
  else errorMessage = error.response.data?.message || "Something went wrong";
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
