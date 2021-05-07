import React from "react";
import PropTypes from "prop-types";

import { Input } from "./styles";

const InputCustom = ({ type, placeholder }) => {
  return <Input type={type} placeholder={placeholder} />;
};

InputCustom.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
InputCustom.defaultProps = {
  type: "",
  placeholder: "",
};

export default InputCustom;
