import React, { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "./validation-schema";
import axios from "axios";
import { ButtonCustom } from "../index";
import { useHistory } from "react-router-dom";
import { colors, initialValues } from "../../constants";

import { FormWrapper, InputWrapper, MessageError } from "./styles";
import Message from "../message";

const Register = () => {
  const [serverError, setServerError] = useState(false);
  const history = useHistory();

  const onSubmit = async (values) => {
    setServerError(false);
    try {
      const res = await values;
      const data = await axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URI}/users`,
        data: {
          name: res.name,
          email: res.email,
          lastName: res.lastName,
          age: res.age,
          password: res.password,
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
  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <InputWrapper
        type="text"
        name="name"
        id="name"
        placeholder="name"
        {...formik.getFieldProps("name")}
      />
      {formik.touched.name && formik.errors.name ? (
        <MessageError>{formik.errors.name}</MessageError>
      ) : null}
      <InputWrapper
        type="text"
        name="lastName"
        id="lastName"
        placeholder="lastName"
        {...formik.getFieldProps("lastName")}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <MessageError>{formik.errors.lastName}</MessageError>
      ) : null}
      <InputWrapper
        type="number"
        name="age"
        id="age"
        placeholder="age"
        {...formik.getFieldProps("age")}
      />
      {formik.touched.age && formik.errors.age ? (
        <MessageError>{formik.errors.age}</MessageError>
      ) : null}
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

      {serverError && <Message msg={"used mail please enter another"} color={"red"} />}
      <ButtonCustom type={"onSubmit"} values={"Register"} background={colors.BLUE} />
    </FormWrapper>
  );
};

export default Register;
