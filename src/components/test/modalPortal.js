/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./modal.css";

const ModalPortal = ({ children, isOpen, closeModal }) => {
  const handleStop = (e) => e.stopPropagation();
  return ReactDOM.createPortal(
    <article className={`modal ${isOpen && "is-open"} `} onClick={closeModal}>
      <div className="modal-container" onClick={handleStop}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children && children}
      </div>
    </article>,
    document.getElementById("modal")
  );
};
ModalPortal.propTypes = {
  children: PropTypes.string,
  isOpen: PropTypes.string,
  closeModal: PropTypes.string,
};
ModalPortal.defaultProps = {
  children: "",
  isOpen: "",
  closeModal: "",
};
export default ModalPortal;
