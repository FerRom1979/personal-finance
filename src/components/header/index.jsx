import React from "react";
import MenuResponsive from "../menu";
import { Link } from "react-router-dom";

import { Content, Title, Logo, WrapperRegister, StarApp, WrapperMenuResponsive } from "./styles";

const Header = () => {
  return (
    <Content>
      <div>
        <WrapperMenuResponsive>
          <MenuResponsive />
        </WrapperMenuResponsive>

        <Logo>LOGO</Logo>
      </div>

      <Title>Personal Finance</Title>

      <WrapperRegister>
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <StarApp>Start App</StarApp>
        </Link>
      </WrapperRegister>
    </Content>
  );
};

export default Header;
