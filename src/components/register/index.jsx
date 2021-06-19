import React, { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "./validation-schema";
import axios from "axios";
import { ButtonCustom } from "../index";
import { useHistory } from "react-router-dom";
import { colors, initialValues } from "../../constants";
import { axiosHttp } from "../../helpers/axiosHttp";
import Message from "../message";

import {
  Content,
  FormWrapper,
  InputWrapper,
  MessageError,
  Title,
  TitleInput,
  WrapperTitle,
} from "./styles";

const Register = () => {
  const [serverError, setServerError] = useState(false);
  const history = useHistory();

  const onSubmit = async (values) => {
    setServerError(false);
    const { name, email, lastName, age, password } = await values;
    try {
      const data = await axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URI}/users`,
        data: {
          name,
          email,
          lastName,
          age,
          password,
        },
      });
      if (data.request.status === 201) history.push("/login");
    } catch (error) {
      if (error) setServerError(true);
    }
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const goToLogin = () => history.push("./login");
  return (
    <Content>
      <WrapperTitle>
        <Title>REGISTER</Title>
        <ButtonCustom values={"Login"} background={colors.BLUE} onClick={goToLogin} />
      </WrapperTitle>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <TitleInput>NAME</TitleInput>
        <InputWrapper type="text" name="name" id="name" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name ? (
          <MessageError>{formik.errors.name}</MessageError>
        ) : null}
        <TitleInput>LAST NAME</TitleInput>
        <InputWrapper
          type="text"
          name="lastName"
          id="lastName"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <MessageError>{formik.errors.lastName}</MessageError>
        ) : null}
        <TitleInput>AGE</TitleInput>
        <InputWrapper type="number" name="age" id="age" {...formik.getFieldProps("age")} />
        {formik.touched.age && formik.errors.age ? (
          <MessageError>{formik.errors.age}</MessageError>
        ) : null}
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
        <TitleInput>CONFIRM PASSWORD</TitleInput>
        <InputWrapper
          type="password"
          name="password"
          id="password"
          {...formik.getFieldProps("password")}
        />
        {serverError && <Message msg={"used mail please enter another"} color={"red"} />}
        <ButtonCustom
          type={"onSubmit"}
          values={"Register"}
          background={colors.BLUE}
          margin={"15px 0 0 0"}
        />
      </FormWrapper>
    </Content>
  );
};

export default Register;
