import React from "react";
import MenuResponsive from "../menu";
import { Link } from "react-router-dom";

import { Content, Title, Logo, WrapperRegister, StarApp } from "./styles";

const Header = () => {
  return (
    <Content>
      <div>
        <div style={{ height: "600px", position: "absolute" }}>
          <MenuResponsive />
        </div>

        <Logo>LOGO</Logo>
      </div>

      <Title>Personal Finance</Title>

      <WrapperRegister>
        <Link to="/checkIn" style={{ textDecoration: "none" }}>
          <StarApp>Start App</StarApp>
        </Link>
      </WrapperRegister>
    </Content>
  );
};

export default Header;
