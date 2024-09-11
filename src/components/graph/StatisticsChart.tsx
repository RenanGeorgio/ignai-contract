import { FunctionComponent } from "react";
import { Chart, BarElement, CategoryScale, LinearScale, Title } from 'chart.js';
import { Bar } from "react-chartjs-2";

Chart.register(BarElement, CategoryScale, LinearScale, Title);

const StatisticsChart: FunctionComponent = () => {
  const chartData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set"],
    datasets: [
      {
        label: "Pendentes",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
        backgroundColor: "#FF6384",
      },
      {
        label: "Analisados",
        data: [20, 30, 40, 50, 60, 70, 80, 90, 100],
        backgroundColor: "#36A2EB",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ height: "100%" }}>
      <h1 style={{ margin: "20px", fontWeight: "bold", fontSize: "25px"}}>Estatísticas de Análises de contrato</h1>
      <div style={{ marginTop: "25px" }}>
        <Bar data={chartData} options={chartOptions} height="100%" />
      </div>
    </div>
  );
};

export default StatisticsChart;
