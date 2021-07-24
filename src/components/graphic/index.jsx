import React from "react";
import { Pie } from "react-chartjs-2";
import PropTypes from "prop-types";

import { Message, Wrapper } from "./styles";

const Graphic = ({ incomes, expenses }) => {
  const data = {
    labels: ["Incomes", "Expenses"],
    datasets: [
      {
        label: "Incomes",
        data: [incomes, expenses],
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

  return (
    <Wrapper>
      {(incomes === 0) & (expenses === 0) ? (
        <Message>No operation for today</Message>
      ) : (
        <Pie data={data} options={options} />
      )}
    </Wrapper>
  );
};
Graphic.propTypes = {
  incomes: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default Graphic;
