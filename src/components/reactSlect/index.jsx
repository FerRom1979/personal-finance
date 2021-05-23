import React, { useMemo } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import makeAnimated from "react-select/animated";

import customStyles from "./custom-style";

const ReactSelect = ({ options, defaultValues }) => {
  const animatedComponents = makeAnimated();
  return (
    <>
      <Select
        options={options}
        defaultValues={defaultValues}
        styles={customStyles}
        components={animatedComponents}
        closeMenuOnSelect={true}
        isMulti={false}
        className="basic-single"
        name="color"
      />
    </>
  );
};
ReactSelect.propTypes = {
  options: PropTypes.array,
  defaultValues: PropTypes.array,
};
ReactSelect.defaultProps = {
  options: [],
  defaultValues: [],
};
export default ReactSelect;
