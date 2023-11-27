import ReactApexChart from "react-apexcharts";
import { Box, Card, CardHeader } from "@mui/material";
import { fNumber } from "../../utils/formatNumber";
import { useChart } from "../../components/chart";

export default function VotingPollSurveyResultsBarChartWidget({
  title,
  subheader,
  chartLabels,
  chartData,
  ...other
}) {
  const chartOptions = useChart({
    chart: { stacked: true },
    plotOptions: {
      bar: {
        borderRadius: 2,
        distributed: true, // Add this line
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
    colors: ["#00AF50", "#FFFF01", "#FE0000", "#ED7D31", "#000000"], // Add your colors hereAdd your colors here
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={chartData}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
