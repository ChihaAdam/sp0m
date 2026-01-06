import { useMetrics } from "./useMetrics";
import { ScatterChart } from "recharts";
import { CartesianGrid, XAxis, YAxis, Tooltip, Scatter } from "recharts";

function ScatterForPages() {
  const { data } = useMetrics();
  let pageMetrics = data?.pagesMetrics.map((page: any) => {
    return {
      page: page.page.title,
      type: page.page.type,
      victims: page.victims,
    };
  });
  return (
    <div className="bg-white dark:bg-zinc-800 rounded shadow-lg p-4 box-content">
      <h2 className="text-center my-2 text-xl font-semibold bg-gradiant text-transparent bg-clip-text">
        Scatter for pages
      </h2>
      <ScatterChart
        width={600}
        height={300}
        data={pageMetrics}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="type" />
        <YAxis dataKey="victims" />
        <Tooltip />
        <Scatter dataKey="victims" fill="#8884d8" />
      </ScatterChart>
    </div>
  );
}

export default ScatterForPages;
