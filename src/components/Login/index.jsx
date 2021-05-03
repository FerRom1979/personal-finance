import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "./validation-schema";
import axios from "axios";

import { Button, FormWrapper, InputWrapper, MessageError } from "./styles";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (values) => {
    try {
      const res = await values;
      await axios({
        method: "post",
        url: `${process.env.REACT_SERVER_URI}/users/login`,
        data: {
          email: res.email,
          password: res.password,
        },
      });
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
      <Button type="onSubmit">Login</Button>
    </FormWrapper>
  );
};

export default Login;
