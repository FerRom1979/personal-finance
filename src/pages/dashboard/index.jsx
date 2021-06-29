import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardIncome, MenuResponsive, Tablet } from "../../components";
import Graphic from "../../components/graphic";
import { separatedCommas, getTotal, getTotalMonth, getTotalYear } from "../../constants";
import { getIncomes } from "../../redux/incomes/actions";

import {
  WrapperHeader,
  WrapperMenu,
  WrapperTotal,
  WrapperSubTitle,
  SubTitle,
  WrapperData,
} from "./styles";

const Index = () => {
  const incomes = useSelector((state) => state.incomesData.incomes);
  const [typeData, setTypeData] = useState("incomes");
  const dispatch = useDispatch();
  const total = getTotal(incomes);
  useEffect(() => {
    const getIncomesData = async () => {
      dispatch(getIncomes());
    };
    getIncomesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeData]);

  return (
    <div>
      <WrapperHeader>
        <WrapperMenu>
          <MenuResponsive />
        </WrapperMenu>
        <WrapperData>
          <Tablet
            totalIncomes={getTotal(incomes).dataDay.totalIncomesDay}
            totalExpenses={getTotal(incomes).dataDay.totalExpensesDay}
            total={getTotal(incomes).dataDay.totalDay}
            title={"Daily summary"}
          />
          <Tablet
            totalIncomes={getTotalMonth(incomes).totalIncomesMonth}
            totalExpenses={getTotalMonth(incomes).totalExpensesMonth}
            total={getTotalMonth(incomes).totalMonth}
            title={"Month summary"}
          />
          <Tablet
            totalIncomes={getTotalYear(incomes).totalIncomesYear}
            totalExpenses={getTotalYear(incomes).totalExpensesYear}
            total={getTotalYear(incomes).totalYear}
            title={"Year summary"}
          />
        </WrapperData>
        <div style={{ width: "80%", height: "400px", margin: "auto" }}>
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
      </WrapperHeader>
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
