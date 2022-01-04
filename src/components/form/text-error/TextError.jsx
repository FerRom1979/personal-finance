import React from "react";
import PropTypes from "prop-types";

const TextError = (props) => {
  return <div>{props.children}</div>;
};
TextError.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TextError;
