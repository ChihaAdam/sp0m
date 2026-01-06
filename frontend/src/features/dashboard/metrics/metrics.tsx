import Loading, { LoadingSub } from "../../../shared/components/ui/loading";
import { useMetrics } from "./useMetrics";
import { lazy, Suspense } from "react";
import RefreshMetrics from "./refresh-metrics";
import Summary from "./summary";
const DistributionPerRange = lazy(() => import("./distribution-per-range"));
const PagesTypeDistribution = lazy(() => import("./pages-type-distribution"));
const ScatterForPages = lazy(() => import("./scatter-for-pages"));

function Metrics() {
  const { isLoading, error } = useMetrics();
  if (isLoading) return <Loading />;
  if (error) return <p>{error.message}</p>;
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="font-semibold bg-gradiant text-2xl text-transparent bg-clip-text">
          Metrics
        </h2>

        <RefreshMetrics />
      </div>
      <Summary />
      <div className="flex flex-wrap justify-around gap-2">
        <Suspense fallback={<LoadingSub />}>
          <DistributionPerRange />
          <PagesTypeDistribution />
          <ScatterForPages />
        </Suspense>
      </div>
    </div>
  );
}

export default Metrics;
