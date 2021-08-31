import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tablet, Graphic, InputRadio, TableIncomes, Modal, CreateIncome } from "../../components";
import { getTotal, getTotalData } from "../../constants";
import { getIncomes } from "../../redux/incomes/actions";
import { useModal } from "../../hooks/useModal";

import {
  WrapperSubTitle,
  WrapperData,
  Title,
  Select,
  WrapperInputRadio,
  ButtonAdd,
  ADDSpan,
} from "./styles";

const Dashboard = () => {
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
  const getIncomesData = async () => {
    dispatch(getIncomes());
  };

  useEffect(() => {
    getIncomesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <WrapperSubTitle>
        <Title>DASHBOARD</Title>
        <WrapperInputRadio>
          <InputRadio
            label={"Day"}
            name={"date"}
            id={"day"}
            value={"day"}
            onChange={(e) => setDate(e.target.value)}
            fontSize={30}
          />
          <InputRadio
            label={"Month"}
            name={"date"}
            id={"month"}
            value={"month"}
            onChange={(e) => setDate(e.target.value)}
            fontSize={30}
          />

          <InputRadio
            label={"Year"}
            name={"date"}
            id={"year"}
            value={"year"}
            onChange={(e) => setDate(e.target.value)}
            fontSize={30}
          />
        </WrapperInputRadio>

        <Select>
          <span>{getTotal().toDay.format("ll")}</span>
        </Select>
        <ButtonAdd type="button" onClick={openModal}>
          <ADDSpan>+ADD INCOME</ADDSpan>
        </ButtonAdd>
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
        <TableIncomes incomes={incomes.length} />
      </WrapperData>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <CreateIncome closeModal={closeModal} />
      </Modal>
    </div>
  );
};
export default Dashboard;
