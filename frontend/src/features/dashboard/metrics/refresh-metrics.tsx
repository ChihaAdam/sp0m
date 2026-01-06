import { RefreshCcw } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
function RefreshMetrics() {
  const queryClient = useQueryClient();
  function refresh() {
    queryClient.invalidateQueries({ queryKey: ["metrics"] });
  }
  return <RefreshCcw onClick={refresh} className="cursor-pointer" />;
}

export default RefreshMetrics;
