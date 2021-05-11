import React from "react";
import { CardIncome, MenuResponsive } from "../../components";

import { WrapperHeader, WrapperMenu, WrapperTotal, WrapperSubTitle } from "./styles";

const index = () => {
  return (
    <div>
      <WrapperHeader>
        <WrapperMenu>
          <MenuResponsive />
        </WrapperMenu>
        <WrapperTotal>
          <span>total:</span>
          <span>100,00$</span>
        </WrapperTotal>
      </WrapperHeader>
      <WrapperSubTitle>
        <h4>INCOME</h4>
        <h4>EXPENSES</h4>
      </WrapperSubTitle>
      <div>
        <CardIncome />
      </div>
    </div>
  );
};

export default index;
