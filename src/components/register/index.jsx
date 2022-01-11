import React, { useState } from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "./validation-schema";
import axios from "axios";
import { ButtonCustom } from "../index";
import { colors, initialValues } from "../../constants";
import FormControl from "../form/FormControl";
import PropTypes from "prop-types";
import { WrapperSignup, WrapperBottom } from "./styles";
import Loaders from "../loader";
import TextError from "../form/text-error/TextError";

const Register = ({ transition, setTransition }) => {
  const [serverError, setServerError] = useState(false);

  const onSubmit = async (values) => {
    setServerError(false);
    const { name, email, password } = await values;
    try {
      const data = await axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URI}/users`,
        data: {
          name,
          email,
          password,
        },
      });
      if (data.request.status === 201) setTransition(!transition);
    } catch (error) {
      if (error) setServerError(true);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => {
        //  console.log("Formik props", formik);
        return (
          <>
            {formik.isSubmitting ? (
              <Loaders />
            ) : (
              <WrapperSignup className={transition || state ? "" : "active"}>
                <Form className="form">
                  <h3>Sign up</h3>
                  <FormControl control="input" type="name" label="Name" name="name" />
                  <FormControl control="input" type="email" label="Email" name="email" />
                  <FormControl control="input" type="password" label="Password" name="password" />
                  <FormControl
                    control="input"
                    type="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                  />
                  <WrapperBottom>
                    {serverError && (
                      <TextError styles={{ marginBottom: "30px" }}>
                        <span>Wrong email or password </span>
                      </TextError>
                    )}

                    <ButtonCustom
                      type={"onSubmit"}
                      values={"Register"}
                      background={colors.BLUE}
                      minWidth={"100%"}
                      disabled={!formik.isValid}
                    />
                  </WrapperBottom>
                </Form>
              </WrapperSignup>
            )}
          </>
        );
      }}
    </Formik>
  );
};
Register.propTypes = {
  transition: PropTypes.string,
  setTransition: PropTypes.func,
};
Register.defaultProps = {
  transition: "",
  setTransition: "",
};

export default Register;
