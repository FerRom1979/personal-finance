import React from "react";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

const Graphic = ({ incomes }) => {
  const incomesData = incomes.filter((income) => income.category === "incomes");
  const expensesData = incomes.filter((income) => income.category === "expenses");
  let i = 0;
  let e = 0;
  incomesData.map((income) => (i += income.totalIncome));
  expensesData.map((income) => (e += income.totalIncome));
  console.log(expensesData);
  const data = {
    labels: ["Incomes", "Expenses"],
    datasets: [
      {
        label: ["Incomes"],
        data: [i, e],
        backgroundColor: ["#28b463", "#c0392b", "#2471a3", "#d68910", "#34495e"],
        borderWidth: 1,
        borderColor: "black",
        hoverBorderColor: "#b6f7d1",
        hoverBackgroundColor: "yellow",
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: true,
      text: `fer`,
      fontSize: 30,
    },
  };
  return <Bar data={data} options={options} />;
};
Graphic.propTypes = {
  incomes: PropTypes.object.isRequired,
};

export default Graphic;
