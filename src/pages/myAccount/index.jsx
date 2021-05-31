import React, { useState, useEffect } from "react";
import AvatarMen from "../../images/avatarMen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCountries, languages } from "../../constants";
import CustomSelect from "../../components/reactSlect";
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
  const user = useSelector((state) => state.userData.user);
  const [openList, setOpenList] = useState(false);
  const [countries, setCountries] = useState("");

  useEffect(() => {
    const get = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    get();
  }, []);

  return (
    <div>
      <WrapperHeader>
        <Logo>LOGO</Logo>
        <WrapperAvatar>
          <Avatar src={AvatarMen} alt="avatar" width={"40px"} height={"40px"} />
          <h6>{user ? user.name : "user"}</h6>
        </WrapperAvatar>
      </WrapperHeader>
      <WrapperTitle>
        <Title>My Account</Title>
        <ButtonClick type="button" onClick={() => setOpenList(!openList)}>
          <FontAwesomeIcon icon={faChevronDown} />
        </ButtonClick>
      </WrapperTitle>

      <DataList style={{ display: openList ? "block" : "none" }}>
        <ItemList>
          <Item>OVERVIEW</Item>
        </ItemList>
        <ItemList>
          <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }}>
            <Item>DASHBOARD</Item>
          </Link>
        </ItemList>
        <ItemList>
          <Item>SETTING</Item>
        </ItemList>
        <ItemList>
          <Item>SUBSCRIPTION</Item>
        </ItemList>
        <ItemList>
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <Item>HOME</Item>
          </Link>
        </ItemList>
      </DataList>
      <WrapperCardInfo>
        <h4>Update info</h4>
        <InputCustom type={"text"} placeholder={user.name} />
        <InputCustom type={"email"} placeholder={user.email} />
        <ButtonCustom values={"UPDATE YOUR INFORMATION"} />
      </WrapperCardInfo>
      <WrapperCardInfo>
        <WrapperCardLanguage>
          <WrapperSelect>
            <span>Currency</span>
            <CustomSelect options={countries} defaultValue={countries[0]} label={"single select"} />
          </WrapperSelect>
          <WrapperSelect>
            <span>Language</span>
            <CustomSelect options={languages} defaultValue={languages[0]} />
          </WrapperSelect>
        </WrapperCardLanguage>

        <ButtonCustom values={"save"} />
      </WrapperCardInfo>
      <WrapperCardInfo>
        <Avatar width={"120px"} height={"120px"} src={AvatarMen} alt="avatar" />
        <h4>
          {user ? user.name : "username"} {user ? user.lastName : "last name"}
        </h4>
        <ButtonCustom values={"CHANGE PASSWORD"} />
      </WrapperCardInfo>
    </div>
  );
};

export default MyAccount;
