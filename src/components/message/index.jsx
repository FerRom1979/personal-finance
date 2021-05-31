import React from "react";
import PropTypes from "prop-types";

const Message = ({ msg, color }) => {
  let styles = {
    padding: "rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: color || "",
    fontWeight: "bold",
    // backgroundColor: bgColor || "",
  };
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
};
Message.propTypes = {
  msg: PropTypes.string,
  color: PropTypes.string,
};
Message.defaultProps = {
  options: "",
  defaultValues: "",
};

export default Message;
