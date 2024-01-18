import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function DoughnutChart() {
  const data = {
    datasets: [
      {
        data: [9, 9, 9, 9, 9],
        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: ["Bills", "Food", "Shopping", "insurance", "Clothing"],
  };
  const [chartOptions, setChartOptions] = useState({
    cutoutPersentage: 20,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // Hide the border of the arcs
      },
    },
  });
  const options = {};
  return (
    <div>
      <div>
        <Doughnut data={data} options={chartOptions} />
      </div>
    </div>
  );
}
