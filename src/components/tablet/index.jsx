import React from "react";
import PropTypes from "prop-types";

import { Title, WrapperData, TextData, WrapperTablet } from "./styles";

const Tablet = ({ totalIncomes }) => {
  return (
    <WrapperTablet>
      <Title>Daily summary</Title>
      <WrapperData bg={"#43A854"}>
        <TextData>Incomes: {totalIncomes.totalIncome}$</TextData>
      </WrapperData>
      <WrapperData bg={"#5B69E2"}>
        <TextData>Expenses: {totalIncomes.totalExpenses}$</TextData>
      </WrapperData>
      <WrapperData bg={"#0099FF"}>
        <TextData>Balance: {totalIncomes.total}$</TextData>
      </WrapperData>
      <WrapperData bg={"#FFD700"}>
        <TextData>Available: 12000$</TextData>
      </WrapperData>
    </WrapperTablet>
  );
};
Tablet.propTypes = {
  totalIncomes: PropTypes.object.isRequired,
};

export default Tablet;
