import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loaders from "../loader";
import { getIncomes } from "../../redux/incomes/actions";
import { useSelector, useDispatch } from "react-redux";
import { trash, pencil } from "../../images";
import Modal from "../modal/modal";
import { useModal } from "../../hooks/useModal";
import EditIncomes from "../editIncome";
import { pagination, deleteIncome, filterIncomes } from "../../helpers";

import {
  Table,
  WrapperButton,
  ButtonPage,
  WrapperButtonPage,
  CounterPage,
  WrapperLoader,
  ButtonOptions,
} from "./styles";
import InputRadio from "../inputRadio";

const TableIncomes = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const incomes = useSelector((state) => state.incomesData.incomes);
  const [dataEdit, setDataEdit] = useState({});
  const [incomesFilter, setIncomesFilter] = useState("");
  const [idEdit, setIdEdit] = useState("");
  const dispatch = useDispatch();
  const [response, setResponse] = useState({
    data: [],
    disabled: false,
    disabledPrev: true,
    error: "",
  });
  const [id, setId] = useState();
  const [counter, setCounter] = useState(1);
  const [skip, setSkip] = useState(0);
  const limit = 8;

  useEffect(() => {
    pagination(limit, skip, counter).then((res) => {
      setResponse(res);
    });
  }, [skip, counter, incomes]);

  useEffect(() => {
    const getIncomesData = async () => {
      dispatch(getIncomes());
    };
    getIncomesData();
    deleteIncome(id);
  }, [id, dispatch]);

  const handleEditData = (income) => {
    const { category, description, totalIncome, IncomePermanent, typeOfIncome } = income;
    setDataEdit({ category, description, totalIncome, IncomePermanent, typeOfIncome });
    setIdEdit(income._id);
    openModal();
  };

  console.log(response);
  return (
    <div>
      {!response?.loader ? (
        <WrapperLoader>
          <Loaders />
        </WrapperLoader>
      ) : (
        <>
          <CounterPage>
            <div>
              <InputRadio
                label={"Incomes"}
                name={"Incomes"}
                id={"incomes"}
                value={"incomes"}
                onChange={(e) => setIncomesFilter(e.target.value)}
                fontSize={16}
              />
              <InputRadio
                label={"Expenses"}
                name={"Incomes"}
                id={"expenses"}
                value={"expenses"}
                onChange={(e) => setIncomesFilter(e.target.value)}
                fontSize={16}
              />
            </div>
            Page: {counter} - {counter < response?.countPage + 1 ? response?.countPage : ""}
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
                      <ButtonOptions type="button" onClick={() => handleEditData(income)}>
                        <img src={pencil} alt="pencil" width="20px" />
                      </ButtonOptions>
                      <ButtonOptions type="button" onClick={() => setId(income._id)}>
                        <img src={trash} alt="trash" width="20px" />
                      </ButtonOptions>
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
          <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <EditIncomes
              isEdit
              dataEdit={dataEdit}
              setDataEdit={setDataEdit}
              idEdit={idEdit}
              closeModal={closeModal}
            />
          </Modal>
        </>
      )}
    </div>
  );
};
TableIncomes.propTypes = {
  incomes: PropTypes.number.isRequired,
};
export default TableIncomes;
