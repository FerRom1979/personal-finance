import React, { useState } from "react";
import AvatarMen from "../../images/avatarMen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { ButtonCustom, InputCustom } from "../../components";

import {
  Avatar,
  WrapperHeader,
  WrapperAvatar,
  Title,
  DataList,
  ItemList,
  WrapperTitle,
  ButtonClick,
  Logo,
  Item,
  WrapperCardInfo,
  WrapperCardLanguage,
  Select,
  WrapperSelect,
} from "./styles";

const MyAccount = () => {
  const [ver, setVer] = useState(false);
  return (
    <div>
      <WrapperHeader>
        <Logo>LOGO</Logo>
        <WrapperAvatar>
          <Avatar src={AvatarMen} alt="avatar" width={"40px"} height={"40px"} />
          <h6>user name</h6>
        </WrapperAvatar>
      </WrapperHeader>
      <WrapperTitle>
        <Title>My Account</Title>
        <ButtonClick type="button" onClick={() => setVer(!ver)}>
          <FontAwesomeIcon icon={faChevronDown} />
        </ButtonClick>
      </WrapperTitle>

      <DataList style={{ display: ver ? "block" : "none" }}>
        <ItemList>
          <Item>OVERVIEW</Item>
        </ItemList>
        <ItemList>
          <Item>DASHBOARD</Item>
        </ItemList>
        <ItemList>
          <Item>SETTING</Item>
        </ItemList>
        <ItemList>
          <Item>SUBSCRIPTION</Item>
        </ItemList>
        <ItemList>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Item>HOME</Item>
          </Link>
        </ItemList>
      </DataList>
      <WrapperCardInfo>
        <h4>Update info</h4>
        <InputCustom type={"text"} placeholder={"name"} />
        <InputCustom type={"email"} placeholder={"email"} />
        <ButtonCustom values={"UPDATE YOUR INFORMATION"} />
      </WrapperCardInfo>
      <WrapperCardInfo>
        <WrapperCardLanguage>
          <WrapperSelect>
            <span>Language</span>
            <Select id="language">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="portuguese">Portuguese</option>
            </Select>
          </WrapperSelect>
          <WrapperSelect>
            <span>Currency</span>
            <Select id="currency">
              <option value="english">Argentina</option>
              <option value="spanish">Brazil</option>
              <option value="portuguese">England</option>
            </Select>
          </WrapperSelect>
        </WrapperCardLanguage>

        <ButtonCustom values={"save"} />
      </WrapperCardInfo>
      <WrapperCardInfo>
        <Avatar width={"120px"} height={"120px"} src={AvatarMen} alt="avatar" />
        <h4>userNAme</h4>
        <ButtonCustom values={"CHANGE PASSWORD"} />
      </WrapperCardInfo>
    </div>
  );
};

export default MyAccount;
