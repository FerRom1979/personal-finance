import React from "react";
import PropTypes from "prop-types";

const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor || "",
  };
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
};
Message.propTypes = {
  msg: PropTypes.string,
  bgColor: PropTypes.string,
};
Message.defaultProps = {
  options: "",
  defaultValues: "",
};

export default Message;
