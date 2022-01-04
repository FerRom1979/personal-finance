/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../text-error/TextError";
import PropTypes from "prop-types";

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="frorm-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
};
Select.defaultProps = {
  label: "",
  name: "",
  options: [],
};
export default Select;
