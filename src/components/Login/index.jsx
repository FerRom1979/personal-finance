import React, { useEffect, useState } from "react";
/* import { useFormik, useField } from "formik"; */
import { Formik, Form } from "formik";
import { validationSchema } from "./validation-schema";
import { ButtonCustom } from "../../components";
import { useDispatch } from "react-redux";
import { addUserAction, getErrorsApi } from "../../redux/user/actions";
import { useHistory } from "react-router-dom";
import { colors, initialValuesLogin } from "../../constants";
import { axiosHttp } from "../../helpers";

import padlock from "../../images/padlock.jpg";
import FormControl from "../form/FormControl";
import { WrapperBottomLogin, FormWrapper } from "./styles";
import Loaders from "../loader";

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

  const goToRegister = () => history.push("/register");
  return (
    <Formik
      initialValues={initialValuesLogin}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log("Formik props", formik);
        return (
          <FormWrapper>
            {formik.isSubmitting ? (
              <Loaders />
            ) : (
              <Form>
                <FormControl control="input" type="email" label="Email" name="email" />
                <FormControl control="input" type="password" label="Password" name="password" />
                <WrapperBottomLogin>
                  <ButtonCustom type={"onSubmit"} values={"Login"} background={colors.BLUE} />
                </WrapperBottomLogin>
              </Form>
            )}
          </FormWrapper>
        );
      }}
    </Formik>
  );
};

export default Login;
