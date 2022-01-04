import React from "react";
import Input from "./Input/Input.jsx";
import PropTypes from "prop-types";
import Checkbox from "./checkbox/Checkbox.jsx";
import Textarea from "./textarea/Textarea.jsx";
import Select from "./select/Select.jsx";
import RadioButton from "./radio-button/RadioButton.jsx";

const FormControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    default:
      return null;
  }
};

FormControl.propTypes = {
  control: PropTypes.string.isRequired,
};

export default FormControl;
