import React from "react";
import { useSelector } from "react-redux";
import { colors } from "../../constants";
import { ButtonCustom, InputCustom } from "../../components";
import { logout, avatarMen } from "../../images";

import { Avatar, WrapperHeader, WrapperAvatar, WrapperCardInfo } from "./styles";

const MyAccount = () => {
  const user = useSelector((state) => state.userData.user);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <WrapperHeader>
          <WrapperAvatar>
            <Avatar src={avatarMen} alt="avatar" width={"40px"} height={"40px"} />
            <h6>{user ? user.name : "user"}</h6>
          </WrapperAvatar>
        </WrapperHeader>
        <div style={{ display: "flex" }}>
          <WrapperCardInfo>
            <h4>Update info</h4>
            <InputCustom type={"text"} placeholder={user?.name || "Name"} />
            <InputCustom type={"email"} placeholder={user?.email || "Email"} />
            <ButtonCustom values={"UPDATE YOUR INFORMATION"} background={colors.BLUE} />
          </WrapperCardInfo>
          <WrapperCardInfo>
            <Avatar width={"120px"} height={"120px"} src={avatarMen} alt="avatar" />
            <h4>
              {user ? user.name : "username"} {user ? user.lastName : "last name"}
            </h4>
            <ButtonCustom values={"CHANGE PASSWORD"} background={colors.BLUE} />
          </WrapperCardInfo>
          <WrapperCardInfo>
            <Avatar width={"120px"} height={"120px"} src={logout} alt="avatar" />
            <h4>
              {user ? user.name : "username"} {user ? user.lastName : "last name"}
            </h4>
            <ButtonCustom values={"LOGOUT"} background={colors.RED} />
          </WrapperCardInfo>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
