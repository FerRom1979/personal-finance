import React from "react";
import { useFormik } from "formik";
import { Button, FormWrapper, InputWrapper, MessageError } from "./styles";
import { validationSchema } from "./validation-schema";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log("Form Data", values);
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
