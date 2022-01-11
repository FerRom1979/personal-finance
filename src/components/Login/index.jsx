import React, { useState } from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "./validation-schema";
import { ButtonCustom } from "../../components";
import { useDispatch } from "react-redux";
import { addUserAction } from "../../redux/user/actions";
import { useHistory, Link } from "react-router-dom";
import { colors, initialValuesLogin } from "../../constants";
import { axiosHttp } from "../../helpers";
import PropTypes from "prop-types";
import FormControl from "../form/FormControl";
import { WrapperBottom, WrapperSignin } from "./styles";
import Loaders from "../loader";
import TextError from "../form/text-error/TextError";

const Login = ({ transition }) => {
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
  return (
    <Formik
      initialValues={initialValuesLogin}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        //  console.log("Formik props", formik);
        return (
          <>
            {formik.isSubmitting ? (
              <Loaders />
            ) : (
              <WrapperSignin className={!transition ? "" : "active"}>
                <Form className="form">
                  <h3>Sign In</h3>
                  <FormControl control="input" type="email" label="Email" name="email" />
                  <FormControl control="input" type="password" label="Password" name="password" />
                  <WrapperBottom>
                    {serverError && (
                      <TextError styles={{ marginBottom: "30px" }}>
                        <span>Wrong email or password </span>
                      </TextError>
                    )}

                    <ButtonCustom
                      type={"onSubmit"}
                      values={"Login"}
                      background={colors.BLUE}
                      minWidth={"100%"}
                      disabled={!formik.isValid}
                    />
                  </WrapperBottom>
                  <Link to={"#"}>forgot password</Link>
                </Form>
              </WrapperSignin>
            )}
          </>
        );
      }}
    </Formik>
  );
};
Login.propTypes = {
  transition: PropTypes.string,
};
Login.defaultProps = {
  transition: "",
};
export default Login;
