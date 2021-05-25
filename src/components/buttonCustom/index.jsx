import React from "react";
import PropTypes from "prop-types";

import { Button } from "./styles";

const ButtonCustom = ({ values, color, type, onClick, minWidth, background }) => {
  return (
    <Button type={type} color={color} onClick={onClick} minWidth={minWidth} background={background}>
      {values}
    </Button>
  );
};

ButtonCustom.propTypes = {
  values: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  minWidth: PropTypes.string,
};
ButtonCustom.defaultProps = {
  values: "",
  color: "",
  type: "",
  minWidth: "",
  background: "",
};

export default ButtonCustom;
