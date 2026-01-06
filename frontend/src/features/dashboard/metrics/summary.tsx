import { useMetrics } from "./useMetrics";
function Summary() {
  const { data } = useMetrics();
  return (
    <div className="bg-white dark:bg-zinc-800 rounded shadow-lg p-4 box-content">
      <h3 className="text-center my-2 text-xl font-semibold bg-gradiant text-transparent bg-clip-text">
        Summary
      </h3>
      <div className="w-full flex justify-between items-center">
        <span className="font-semibold shadow-sm p-2">
          max victims in page: {data?.maxVictims?.victims}
        </span>
        <span className="font-semibold shadow-sm p-2">
          min victims in page: {data?.minVictims?.victims}
        </span>
        <span className="font-semibold shadow-sm p-2">
          average victims in page: {data?.avgVictims.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
export default Summary;
