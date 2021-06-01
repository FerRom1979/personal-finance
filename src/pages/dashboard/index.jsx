import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardIncome, MenuResponsive } from "../../components";
import { separatedCommas, getTotal } from "../../constants";
import { getIncomes } from "../../redux/incomes/actions";

import { WrapperHeader, WrapperMenu, WrapperTotal, WrapperSubTitle, SubTitle } from "./styles";

const Index = () => {
  const incomes = useSelector((state) => state.incomesData.incomes);
  const [typeData, setTypeData] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    const getIncomesData = async () => {
      dispatch(getIncomes());
    };
    getIncomesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const total = getTotal(incomes);
  return (
    <div>
      <WrapperHeader>
        <WrapperMenu>
          <MenuResponsive />
        </WrapperMenu>
        <WrapperTotal>
          <SubTitle>total:</SubTitle>
          <SubTitle color={total >= 0 ? "green" : "red"}>
            {total && total < 0 ? ` ${separatedCommas(total)}$` : ` ${separatedCommas(total)}$`}
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
