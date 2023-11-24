import ReactApexChart from "react-apexcharts";
import { Box, Card, CardHeader } from "@mui/material";
import { fNumber } from "../../utils/formatNumber";
import { useChart } from "../../components/chart";

export default function BarChartWidget({ title, subheader, chartLabels, chartData, ...other }) {
  const chartOptions = useChart({
    chart: { stacked: true },
    plotOptions: {
      bar: {
        borderRadius: 2,
        dataLabels: {
          total: {
            enabled: true,
          },
        },
      },
    },
    xaxis: {
      categories: chartLabels,
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={chartData} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
