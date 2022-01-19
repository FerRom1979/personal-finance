import React from "react";
import { Link } from "react-router-dom";
import { home, calculator, avatar, contact } from "../../images";

import { Content, Logo, WrapperMenu, Image } from "./styles";

const Header = () => {
  return (
    <Content>
      <WrapperMenu>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <Logo>
            <Image src={calculator} alt="logo" />
            <span>DASHBOARD</span>
          </Logo>
        </Link>
        <Link to="/myAccount" style={{ textDecoration: "none" }}>
          <Logo>
            <Image src={avatar} alt="logo" />
            <span>ACCOUNT</span>
          </Logo>
        </Link>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Logo>
            <Image src={home} alt="logo" />
            <span>HOME</span>
          </Logo>
        </Link>

        <Logo>
          <Image src={contact} alt="logo" />
          <span>CONTACT</span>
        </Logo>
      </WrapperMenu>
    </Content>
  );
};

export default Header;
