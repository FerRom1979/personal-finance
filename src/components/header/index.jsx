import React from "react";
import MenuResponsive from "../menu";
import { Link } from "react-router-dom";
import calculator from "../../images/iconmonstr-calculator-2.svg";
import avatar from "../../images/iconmonstr-user-20.svg";
import home from "../../images/iconmonstr-home-3.svg";
import contact from "../../images/iconmonstr-email-13.svg";
import coin from "../../images/iconmonstr-coin-2.svg";
import useResize from "../../hooks/useResize";
import PropTypes from "prop-types";

import {
  Content,
  Title,
  Logo,
  WrapperRegister,
  StarApp,
  WrapperMenuResponsive,
  WrapperMenu,
  ButtonAdd,
  ADDSpan,
} from "./styles";

const Header = ({ openModal }) => {
  return (
    <Content>
      {useResize().width < 430 ? (
        <WrapperMenuResponsive>
          <MenuResponsive />
        </WrapperMenuResponsive>
      ) : (
        <WrapperMenu>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <Logo>
              <img src={calculator} alt="logo" width="50px" />
              <span>DASHBOARD</span>
            </Logo>
          </Link>
          <Link to="/myAccount" style={{ textDecoration: "none" }}>
            <Logo>
              <img src={avatar} alt="logo" width="50px" />
              <span>ACCOUNT</span>
            </Logo>
          </Link>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Logo>
              <img src={home} alt="logo" width="50px" />
              <span>HOME</span>
            </Logo>
          </Link>

          <Logo>
            <img src={contact} alt="logo" width="50px" />
            <span>CONTACT</span>
          </Logo>
        </WrapperMenu>
      )}

      <Title>Personal Finance</Title>

      <ButtonAdd type="button" onClick={openModal}>
        <img src={coin} alt="logo" width="50px" />
        <ADDSpan>ADD</ADDSpan>
      </ButtonAdd>
    </Content>
  );
};
Header.propTypes = {
  openModal: PropTypes.bool,
};
Header.defaultProps = {
  openModal: false,
};
export default Header;
