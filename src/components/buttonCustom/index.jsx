import React from "react";
import PropTypes from "prop-types";

import { Button } from "./styles";

const ButtonCustom = ({ values, color, type, onClick, minWidth }) => {
  return (
    <Button type={type} color={color} onClick={onClick} minWidth={minWidth}>
      {values}
    </Button>
  );
};

ButtonCustom.propTypes = {
  values: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  minWidth: PropTypes.string,
};
ButtonCustom.defaultProps = {
  values: "",
  color: "",
  type: "",
  minWidth: "",
};

export default ButtonCustom;
