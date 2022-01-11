import React from "react";
import PropTypes from "prop-types";

import { WrapperError } from "./TextError.Styles";

const TextError = (props) => {
  return <WrapperError $bsStyle={props.styles}>{props.children}</WrapperError>;
};
TextError.propTypes = {
  children: PropTypes.element.isRequired,
  styles: PropTypes.object,
};

export default TextError;
