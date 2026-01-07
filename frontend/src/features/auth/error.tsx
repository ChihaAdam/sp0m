import { AlertCircleIcon } from "lucide-react";
function Error({ message }: { message: string | undefined }) {
  return (
    message && (
      <div className="text-red-500 flex items-center gap-2 border border-red-500 p-2 rounded">
        <AlertCircleIcon />
        {message}
      </div>
    )
  );
}

export default Error;
