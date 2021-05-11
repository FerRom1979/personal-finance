import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import "./styles.css";

const MenuResponsive = () => {
  return (
    <Menu>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/myAccount">My Account</Link>
      {/* <a onClick={this.showSettings} className="menu-item--small" href="">
        Settings
      </a> */}
    </Menu>
  );
};

export default MenuResponsive;
