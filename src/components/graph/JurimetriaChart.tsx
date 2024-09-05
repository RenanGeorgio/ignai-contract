import { FunctionComponent } from "react";
import { Chart, BarElement, CategoryScale, LinearScale, Title } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(BarElement, CategoryScale, LinearScale, Title);

const JurimetriaChart: FunctionComponent = () => {
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
    <div style={{ boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)", margin:"10px"}}>
      <h1 style={{ margin: "20px", fontWeight: "bold", fontSize: "25px"}}>Jurimetria de busca</h1>
      <p>Total número de processos no período 23.8k</p>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default JurimetriaChart;
