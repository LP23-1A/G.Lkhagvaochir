"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: ["jul", "jul", "jul", "jul", "jul", "jul", "jul"],
  datasets: [
    {
      label: "sales number",
      data: [3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000],
      borderColor: "black",
      backgroundColor: ["#84CC16"],
      borderWidth: 1,
      options: false,
    },
    {
      label: "sales number",
      data: [2000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000],
      borderColor: "black",
      backgroundColor: ["#F97316"],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Income - Expense",
    },
  },
};

export default function Chart() {
  return (
    <div>
      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
