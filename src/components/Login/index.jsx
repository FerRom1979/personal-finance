import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "./validation-schema";
import { ButtonCustom } from "../../components";
import { useDispatch } from "react-redux";
import { addUserAction } from "../../redux/user/actions";
import { useHistory } from "react-router-dom";
import { colors, initialValuesLogin } from "../../constants";
import { axiosHttp } from "../../helpers/axiosHttp";
import Message from "../message";
import imgLogin from "../../images/login.png";

import {
  FormWrapper,
  InputWrapper,
  MessageError,
  Content,
  WrapperTitle,
  Title,
  WrapperImg,
  ImgLogin,
  TitleInput,
  WrapperBottomLogin,
} from "./styles";

const Login = () => {
  const [serverError, setServerError] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    setServerError(false);
    try {
      let api = axiosHttp();
      const url = `${process.env.REACT_APP_SERVER_URI}/users/login`;
      const options = {
        data: {
          email: values.email,
          password: values.password,
        },
      };
      const info = await api.post(url, options);

      localStorage.setItem("token", await info.token);
      localStorage.setItem("id", info.user._id);

      dispatch(addUserAction(info.user));
      if (info) history.push("/home");
    } catch (error) {
      if (error) setServerError(true);
    }
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues: initialValuesLogin,
    validationSchema,
    onSubmit,
  });

  const goToRegister = () => history.push("/register");

  return (
    <Content>
      <WrapperTitle>
        <Title>LOGIN</Title>
        <ButtonCustom values={"Register"} background={colors.BLUE} onClick={goToRegister} />
      </WrapperTitle>
      <WrapperImg>
        <ImgLogin src={imgLogin} alt="login" />
      </WrapperImg>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <TitleInput>EMAIL</TitleInput>
        <InputWrapper type="email" name="email" id="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <MessageError>{formik.errors.email}</MessageError>
        ) : null}
        <TitleInput>PASSWORD</TitleInput>
        <InputWrapper
          type="password"
          name="password"
          id="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <MessageError>{formik.errors.password}</MessageError>
        ) : null}
        {serverError && <Message msg={"Wrong email or password"} color={"red"} />}
        <WrapperBottomLogin>
          <ButtonCustom type={"onSubmit"} values={"Login"} background={colors.BLUE} />
        </WrapperBottomLogin>
      </FormWrapper>
    </Content>
  );
};

export default Login;
