import React from "react";
import PropTypes from "prop-types";

import { Label } from "./styles";

const InputRadio = ({ name, id, label, onChange, value, fontSize }) => {
  return (
    <>
      <Label htmlFor={id} fontSize={fontSize}>
        <span>{label}</span>
        <input type="radio" name={name} id={id} onChange={onChange} value={value} />
      </Label>
    </>
  );
};
InputRadio.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  fontSize: PropTypes.string,
};
InputRadio.defaultProps = {
  value: "",
  id: "",
  label: "",
};

export default InputRadio;
