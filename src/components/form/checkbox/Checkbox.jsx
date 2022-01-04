/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../text-error/TextError";
import PropTypes from "prop-types";

const Checkbox = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field?.value?.includes(option.value)}
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
Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
};
Checkbox.defaultProps = {
  label: "",
  name: "",
  options: [],
};
export default Checkbox;
