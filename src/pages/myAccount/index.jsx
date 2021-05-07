import React, { useState, useEffect } from "react";
import AvatarMen from "../../images/avatarMen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

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
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(async (response) => {
        console.log(response.data);
        const res = await response.data;
        setCountries(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(countries || "");
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
        <InputCustom type={"text"} placeholder={user.name} />
        <InputCustom type={"email"} placeholder={user.email} />
        <ButtonCustom values={"UPDATE YOUR INFORMATION"} />
      </WrapperCardInfo>
      <WrapperCardInfo>
        <WrapperCardLanguage>
          <WrapperSelect>
            <span>Language</span>
            <Select id="language" name="countries">
              {countries &&
                countries.map((country, index) => (
                  <option key={index} value={country.id}>
                    {country.name}
                  </option>
                ))}
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
        <h4>
          {user ? user.name : user} {user ? user.lastName : Avatar}
        </h4>
        <ButtonCustom values={"CHANGE PASSWORD"} />
      </WrapperCardInfo>
    </div>
  );
};

export default MyAccount;
