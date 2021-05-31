import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "./validation-schema";
import axios from "axios";
import { ButtonCustom } from "../../components";
import { useDispatch } from "react-redux";
import { addUserAction } from "../../redux/user/actions";
import { useHistory } from "react-router-dom";
import { colors } from "../../constants";
import { FormWrapper, InputWrapper, MessageError } from "./styles";
import Message from "../message";

const Login = () => {
  const [serverError, setServerError] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (values) => {
    setServerError(false);
    try {
      const res = await values;
      const info = await axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URI}/users/login`,
        data: {
          email: res.email,
          password: res.password,
        },
      });

      sessionStorage.setItem("token", info.data.token);
      dispatch(addUserAction(info.data.token));
      if (info) history.push("/home");
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

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <InputWrapper
        type="email"
        name="email"
        id="email"
        placeholder="email"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <MessageError>{formik.errors.email}</MessageError>
      ) : null}
      <InputWrapper
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        {...formik.getFieldProps("password")}
      />
      {formik.touched.password && formik.errors.password ? (
        <MessageError>{formik.errors.password}</MessageError>
      ) : null}
      {serverError && <Message msg={"Wrong email or password"} color={"red"} />}
      <ButtonCustom type={"onSubmit"} values={"Login"} background={colors.BLUE} />
    </FormWrapper>
  );
};

export default Login;
