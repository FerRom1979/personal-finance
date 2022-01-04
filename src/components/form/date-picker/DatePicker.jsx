/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import DateView from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import TextError from "../text-error/TextError";
import PropTypes from "prop-types";

const DatePicker = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
DatePicker.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};
DatePicker.defaultProps = {
  label: "",
  name: "",
};
export default DatePicker;
