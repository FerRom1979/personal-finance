import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardIncome, MenuResponsive } from "../../components";
import { separatedCommas } from "../../constants";
import { getIncomes } from "../../redux/incomes/actions";

import { WrapperHeader, WrapperMenu, WrapperTotal, WrapperSubTitle, SubTitle } from "./styles";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getIncomesData = () => {
      dispatch(getIncomes());
    };
    getIncomesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let total = 0;
  const incomes = useSelector((state) => state.incomesData.incomes);
  incomes?.map((income) => (total += income.totalIncome));

  return (
    <div>
      <WrapperHeader>
        <WrapperMenu>
          <MenuResponsive />
        </WrapperMenu>
        <WrapperTotal>
          <SubTitle>total:</SubTitle>
          <SubTitle color={total >= 0 ? "green" : "red"}>
            {total && total < 0 ? -separatedCommas(total) : ` ${separatedCommas(total)}`}
          </SubTitle>
        </WrapperTotal>
      </WrapperHeader>
      <WrapperSubTitle>
        <SubTitle color={"green"}>INCOME</SubTitle>
        <SubTitle color={"red"}>EXPENSES</SubTitle>
      </WrapperSubTitle>
      <div>
        <CardIncome />
      </div>
    </div>
  );
};

export default Index;
