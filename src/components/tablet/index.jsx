import React from "react";
import PropTypes from "prop-types";
import { separatedCommas } from "../../constants";

import { Title, WrapperData, TextData, WrapperTablet } from "./styles";

const Tablet = ({ totalIncomes, title, totalExpenses, total, available }) => {
  return (
    <WrapperTablet>
      <Title>{title}</Title>
      <WrapperData bg={"#43A854"}>
        <TextData>Incomes: {separatedCommas(totalIncomes)}$</TextData>
      </WrapperData>
      <WrapperData bg={"#5B69E2"}>
        <TextData>Expenses: {separatedCommas(totalExpenses)}$</TextData>
      </WrapperData>
      <WrapperData bg={"#0099FF"}>
        <TextData>Balance: {separatedCommas(total)}$</TextData>
      </WrapperData>
      <WrapperData bg={"#FFD700"}>
        <TextData>Available: {separatedCommas(available.total)}$</TextData>
      </WrapperData>
    </WrapperTablet>
  );
};
Tablet.propTypes = {
  totalIncomes: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  totalExpenses: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  available: PropTypes.string.isRequired,
};

export default Tablet;
