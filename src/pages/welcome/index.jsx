import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserAction } from "../../redux/user/actions";
import { useHistory } from "react-router-dom";
import { axiosHttp } from "../../helpers/axiosHttp";

import { Content, Title } from "./styles";

const Welcome = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const tokenItem = localStorage.getItem("token");

  const login = async () => {
    try {
      let api = axiosHttp();

      const url = `${process.env.REACT_APP_SERVER_URI}/users/me`;

      const info = await api.get(url);

      localStorage.setItem("token", tokenItem);
      dispatch(addUserAction(await info));
      if (info) history.push("/home");
      if (!info) history.push("/login");
    } catch (error) {
      if (error) history.push("/login");
    }
  };
  useEffect(() => {
    login();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content>
      <Title>Welcome a Income Personal</Title>
    </Content>
  );
};

export default Welcome;
