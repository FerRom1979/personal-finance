import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tablet } from "../../components";
import Graphic from "../../components/graphic";
import Header from "../../components/header";
import InputRadio from "../../components/inputRadio";
import Modal from "../../components/modal/modal";
import { getTotal, getTotalData } from "../../constants";
import { getIncomes } from "../../redux/incomes/actions";
import { useModal } from "../../hooks/useModal";

import { WrapperSubTitle, WrapperData, Title, Select, WrapperInputRadio } from "./styles";
import CreateIncome from "../../components/createIncome";

const Index = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [date, setDate] = useState("day");
  const incomes = useSelector((state) => state.incomesData.incomes);
  const [typeData, setTypeData] = useState("incomes");
  const dispatch = useDispatch();

  const { totalIncomes, totalExpenses, totalData, title, incomesInfo } = getTotalData(
    date,
    incomes
  );

  const total = getTotal(incomesInfo);
  useEffect(() => {
    const getIncomesData = async () => {
      dispatch(getIncomes());
    };
    getIncomesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeData]);

  return (
    <div>
      <Header openModal={openModal} />
      <WrapperSubTitle>
        <Title>DASHBOARD</Title>
        <WrapperInputRadio>
          <InputRadio
            label={"Day"}
            name={"date"}
            id={"day"}
            value={"day"}
            onChange={(e) => setDate(e.target.value)}
          />
          <InputRadio
            label={"Month"}
            name={"date"}
            id={"month"}
            value={"month"}
            onChange={(e) => setDate(e.target.value)}
          />

          <InputRadio
            label={"Year"}
            name={"date"}
            id={"year"}
            value={"year"}
            onChange={(e) => setDate(e.target.value)}
          />
        </WrapperInputRadio>

        <Select>
          <span>{getTotal().toDay.format("ll")}</span>
        </Select>
      </WrapperSubTitle>

      <WrapperData>
        <Tablet
          totalIncomes={totalIncomes}
          totalExpenses={totalExpenses}
          total={totalData}
          available={getTotal(incomes)}
          title={title}
        />

        <Graphic incomes={totalIncomes} expenses={totalExpenses} />
      </WrapperData>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <CreateIncome />
      </Modal>
    </div>
  );
};

export default Index;
