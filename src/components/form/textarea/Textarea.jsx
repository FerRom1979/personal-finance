/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../text-error/TextError";
import PropTypes from "prop-types";

const Textarea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};
Textarea.defaultProps = {
  label: "",
  name: "",
};
export default Textarea;
