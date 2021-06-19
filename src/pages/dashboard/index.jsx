import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardIncome, MenuResponsive, Tablet } from "../../components";
import { separatedCommas, getTotal } from "../../constants";
import { getIncomes } from "../../redux/incomes/actions";

import { WrapperHeader, WrapperMenu, WrapperTotal, WrapperSubTitle, SubTitle } from "./styles";

const Index = () => {
  const incomes = useSelector((state) => state.incomesData.incomes);
  const [typeData, setTypeData] = useState("incomes");
  const day = new Date();
  const day2 = new Date();
  const day3 = new Date("2021-06-03T01:47:12.977Z");
  const dispatch = useDispatch();
  useEffect(() => {
    const getIncomesData = async () => {
      dispatch(getIncomes());
    };
    getIncomesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeData]);
  const dayData = incomes.filter((income) => income.createAt === day);
  console.log(day3.getTime() === day.getTime());
  console.log(day.getTime() === day2.getTime());
  console.log(
    incomes?.filter(
      (income) => new Date(`${income.updatedAt}`.slice(0, 19)).getTime() === new Date().getTime()
    )
  );
  const total = getTotal(incomes);
  return (
    <div>
      <WrapperHeader>
        <WrapperMenu>
          <MenuResponsive />
        </WrapperMenu>
        <Tablet totalIncomes={getTotal(incomes)} />
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
