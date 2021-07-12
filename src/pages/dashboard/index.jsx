import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardIncome, Tablet, ReactSelect } from "../../components";
import ExpenseCard from "../../components/expenseCard";
import Graphic from "../../components/graphic";
import Header from "../../components/header";
import InputRadio from "../../components/inputRadio";
import { separatedCommas, getTotal, getTotalData } from "../../constants";
import { getIncomes } from "../../redux/incomes/actions";

import {
  WrapperTotal,
  WrapperSubTitle,
  SubTitle,
  WrapperData,
  Title,
  Select,
  WrapperInputRadio,
} from "./styles";

const Index = () => {
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
      <Header />
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
          <ReactSelect
            label={getTotal().toDay.format("ll")}
            onChange={() => console.log("select")}
          />
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
      </WrapperData>

      <ExpenseCard />

      <div style={{ width: "80%", height: "400px", margin: "auto", display: "none" }}>
        <Graphic incomes={incomes} />
      </div>
      <WrapperTotal>
        <SubTitle>total:</SubTitle>
        <SubTitle color={total.total >= 0 ? "green" : "red"}>
          {total && total.total < 0
            ? ` ${separatedCommas(total.total)}$`
            : ` ${separatedCommas(total.total)}$`}
        </SubTitle>
      </WrapperTotal>

      <WrapperSubTitle>
        <SubTitle color={"green"} onClick={() => setTypeData("incomes")} cursor={"pointer"}>
          INCOME
        </SubTitle>
        <SubTitle color={"red"} onClick={() => setTypeData("expenses")} cursor={"pointer"}>
          EXPENSES
        </SubTitle>
      </WrapperSubTitle>
      <div>
        <CardIncome typeData={typeData} />
      </div>
    </div>
  );
};

export default Index;
