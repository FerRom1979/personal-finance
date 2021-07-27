import React from "react";
import PropTypes from "prop-types";

import { Table, WrapperButton } from "./styles";

const TableIncomes = ({ incomes }) => {
  return (
    <div>
      <Table>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Type</th>
          <th>Create</th>
          <th>Total</th>
          <th>Options</th>
        </tr>

        {incomes &&
          incomes.map((income) => (
            <tr key={income.id}>
              <td>{income.category}</td>
              <td>{income.description}</td>
              <td>{income.typeOfIncome}</td>
              <td>{income.createdAt}</td>
              <td>{income.totalIncome}</td>
              <td>
                <WrapperButton>
                  <button type="button" onClick={() => console.log(income._id)}>
                    edit
                  </button>
                  <button type="button" onClick={() => console.log(income._id)}>
                    delete
                  </button>
                </WrapperButton>
              </td>
            </tr>
          ))}
      </Table>
    </div>
  );
};
TableIncomes.propTypes = {
  incomes: PropTypes.array,
};
TableIncomes.defaultProps = {
  incomes: [],
};
export default TableIncomes;
