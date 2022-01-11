import React from "react";
import PropTypes from "prop-types";

import { Button } from "./styles";

const ButtonCustom = ({
  values,
  color,
  type,
  onClick,
  minWidth,
  background,
  width,
  margin,
  mr,
  disabled,
}) => (
  <Button
    type={type}
    color={color}
    onClick={onClick}
    minWidth={minWidth}
    background={background}
    margin={margin}
    mr={mr}
    disabled={disabled}
    className={disabled ? "disabled" : ""}
  >
    {values}
  </Button>
);

ButtonCustom.propTypes = {
  values: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  minWidth: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  mr: PropTypes.string,
  disabled: PropTypes.bool,
};
ButtonCustom.defaultProps = {
  values: "",
  color: "",
  type: "",
  minWidth: "",
  background: "",
  width: "",
  margin: "",
  mr: "",
  disabled: "",
};

export default ButtonCustom;
