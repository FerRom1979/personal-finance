import React from "react";
import PropTypes from "prop-types";

import { Title, WrapperData, TextData, WrapperTablet } from "./styles";

const Tablet = ({ totalIncomes, title, totalExpenses, total }) => {
  return (
    <WrapperTablet>
      <Title>{title}</Title>
      <WrapperData bg={"#43A854"}>
        <TextData>Incomes: {totalIncomes}$</TextData>
      </WrapperData>
      <WrapperData bg={"#5B69E2"}>
        <TextData>Expenses: {totalExpenses}$</TextData>
      </WrapperData>
      <WrapperData bg={"#0099FF"}>
        <TextData>Balance: {total}$</TextData>
      </WrapperData>
      <WrapperData bg={"#FFD700"}>
        <TextData>Available: 12000$</TextData>
      </WrapperData>
    </WrapperTablet>
  );
};
Tablet.propTypes = {
  totalIncomes: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  totalExpenses: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default Tablet;
