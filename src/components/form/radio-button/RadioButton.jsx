/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../text-error/TextError";
import PropTypes from "prop-types";

const RadioButton = () => {
  return (
    <div>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          //  console.log("Field", field)
          return options.map((option) => {
            // console.log(option)
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
RadioButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
};
RadioButton.defaultProps = {
  label: "",
  name: "",
  options: [],
};
export default RadioButton;
