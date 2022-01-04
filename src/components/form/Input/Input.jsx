/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../text-error/TextError";
import PropTypes from "prop-types";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};
Input.defaultProps = {
  label: "",
  name: "",
};

export default Input;
