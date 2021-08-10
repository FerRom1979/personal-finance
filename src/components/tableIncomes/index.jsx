import React, { useState, useEffect } from "react";
import { pagination } from "../../helpers/getDataPagination";
import PropTypes from "prop-types";
import { deleteIncome } from "../../helpers/deleteIncomes";
import Loaders from "../loader";
import { getIncomes } from "../../redux/incomes/actions";
import { useSelector, useDispatch } from "react-redux";
import trash from "../../images/iconmonstr-trash-can-1.svg";
import pencil from "../../images/iconmonstr-pencil-8.svg";
import Modal from "../modal/modal";
import { useModal } from "../../hooks/useModal";
import EditIncomes from "../editIncome";
import { axiosHttp } from "../../helpers/axiosHttp";

import {
  Table,
  WrapperButton,
  ButtonPage,
  WrapperButtonPage,
  CounterPage,
  WrapperLoader,
  ButtonOptions,
} from "./styles";

const TableIncomes = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const incomes = useSelector((state) => state.incomesData.incomes);
  const [dataEdit, setDataEdit] = useState({});
  const [idEdit, setIdEdit] = useState("");
  const dispatch = useDispatch();
  const api = axiosHttp();
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
    pagination(limit, skip, counter, incomes).then((res) => {
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

  return (
    <div>
      {response?.data?.length === 0 ? (
        <WrapperLoader>
          <Loaders />
        </WrapperLoader>
      ) : (
        <>
          <CounterPage>
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
