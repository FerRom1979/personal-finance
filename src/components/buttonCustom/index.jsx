import React from "react";
import PropTypes from "prop-types";

import { Button } from "./styles";

const ButtonCustom = ({ values, color, type }) => {
  console.log(color);
  return (
    <Button type={type} color={color}>
      {values}
    </Button>
  );
};

ButtonCustom.propTypes = {
  values: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
};
ButtonCustom.defaultProps = {
  values: "",
  color: "",
  type: "",
};

export default ButtonCustom;
