import {
  PieChart,
  Pie,
  Cell,
  type PieLabelRenderProps,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useMetrics } from "./useMetrics";
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > ncx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PagesTypeDistribution() {
  const { data } = useMetrics();
  let pageMetrics = [
    { type: "google", value: 0, color: "#0390fc" },
    { type: "instagram", value: 0, color: "#ed6f00" },
    { type: "facebook", value: 0, color: "#3b5998" },
  ];
  data?.pagesMetrics.forEach((page: any) => {
    if (page.page.type === "google") {
      pageMetrics[0].value++;
    } else if (page.page.type === "instagram") {
      pageMetrics[1].value++;
    } else {
      pageMetrics[2].value++;
    }
  });
  return (
    <div className="bg-white dark:bg-zinc-800 rounded shadow-lg p-4 box-content w-1/3 max-md:w-full flex flex-col items-center justify-center">
      <h3 className="text-center my-2 text-xl font-semibold bg-gradiant text-transparent bg-clip-text">
        pages type distribution
      </h3>
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart data={pageMetrics} responsive>
          <Pie
            dataKey="value"
            nameKey="type"
            data={pageMetrics}
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {pageMetrics.map((page: any) => (
              <Cell key={`cell-${page.type}`} fill={page.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
