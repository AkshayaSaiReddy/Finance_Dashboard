import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function ExpenseChart({ transactions }) {
  // Filter only expenses (negative values)
  const expenses = transactions.filter((t) => t.amount < 0);

  // Labels = names
  const labels = expenses.map((t) => t.name);

  // Data = absolute values
  const dataValues = expenses.map((t) => Math.abs(t.amount));

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Expenses",
        data: dataValues,
        backgroundColor: "blue"
      }
    ]
  };

  return (
    <div className="card">
      <h3>Expenses</h3>
      <Bar data={data} />
    </div>
  );
}

export default ExpenseChart;