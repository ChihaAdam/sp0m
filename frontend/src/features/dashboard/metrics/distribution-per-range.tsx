import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useMetrics } from "./useMetrics";
export default function DistributionPerRange() {
  /*no need for loading state because it will be fetched in the parent component and when calling
   it here it will be already cached thanks to react query*/
  const { data } = useMetrics();
  let pageMetrics = [
    { range: "0-5", value: 0 },
    { range: "6-10", value: 0 },
    { range: "11-15", value: 0 },
    { range: "16-20", value: 0 },
    { range: "21-25", value: 0 },
    { range: "26-30", value: 0 },
    { range: "30+", value: 0 },
  ];
  data?.pagesMetrics.forEach((page: any) => {
    if (page.victims >= 0 && page.victims <= 5) {
      pageMetrics[0].value++;
    } else if (page.victims >= 6 && page.victims <= 10) {
      pageMetrics[1].value++;
    } else if (page.victims >= 11 && page.victims <= 15) {
      pageMetrics[2].value++;
    } else if (page.victims >= 16 && page.victims <= 20) {
      pageMetrics[3].value++;
    } else if (page.victims >= 21 && page.victims <= 25) {
      pageMetrics[4].value++;
    } else if (page.victims >= 26 && page.victims <= 30) {
      pageMetrics[5].value++;
    } else {
      pageMetrics[6].value++;
    }
  });
  return (
    <div className="bg-white dark:bg-zinc-800 rounded shadow-lg p-4 box-content w-1/2 max-md:w-full flex flex-col items-center justify-center">
      <h3 className="text-center my-2 text-xl font-semibold bg-gradiant text-transparent bg-clip-text">
        distribution per range
      </h3>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          data={pageMetrics}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          responsive
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
