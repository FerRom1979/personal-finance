import React, { useState, useEffect } from "react";
import { pagination } from "../../helpers/getDataPagination";
import PropTypes from "prop-types";

import { Table, WrapperButton, ButtonPage, WrapperButtonPage, CounterPage } from "./styles";

const TableIncomes = ({ incomes }) => {
  const [response, setResponse] = useState({
    data: [],
    disabled: false,
    disabledPrev: true,
    error: "",
  });
  const [counter, setCounter] = useState(1);
  const [skip, setSkip] = useState(0);
  const limit = 8;

  useEffect(() => {
    pagination(limit, skip, counter, incomes).then((res) => {
      setResponse(res);
    });
  }, [limit, skip, counter, incomes]);
  return (
    <div>
      <CounterPage>
        Page: {counter} - {counter < response.countPage + 1 ? response.countPage : ""}
      </CounterPage>
      <Table>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Type</th>
          <th>Create</th>
          <th>Total</th>
          <th>Options</th>
        </tr>

        {response?.data &&
          response.data.map((income) => (
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
      <WrapperButtonPage>
        <ButtonPage
          type="button"
          disabled={response.disabledPrev}
          onClick={() => {
            setSkip(skip - limit);
            return setCounter(counter - 1);
          }}
        >
          {"<"} Prev
        </ButtonPage>
        <ButtonPage
          type="button"
          disabled={response.disabled}
          onClick={() => {
            setSkip(skip + limit);
            return setCounter(counter + 1);
          }}
        >
          Next {">"}
        </ButtonPage>
      </WrapperButtonPage>
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
