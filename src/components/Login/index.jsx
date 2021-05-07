import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "./validation-schema";
import axios from "axios";
import { ButtonCustom } from "../../components";
import { useDispatch } from "react-redux";
import { addUserAction } from "../../redux/user/actions";
import { useHistory } from "react-router-dom";

import { FormWrapper, InputWrapper, MessageError } from "./styles";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (values) => {
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
      dispatch(addUserAction(info.data.token));
      if (info) {
        history.push("/");
      }
    } catch (error) {
      console.log(error);
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
      <ButtonCustom type={"onSubmit"} values={"Login"} />
    </FormWrapper>
  );
};

export default Login;
