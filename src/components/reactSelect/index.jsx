import React, { useMemo } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import makeAnimated from "react-select/animated";

import customStyles from "./custom-style";

const ReactSelect = ({ options, defaultValues, label }) => {
  const animatedComponents = makeAnimated();
  const handleChange = (value) => {
    console.log(value);
  };
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
        placeholder={label}
        onChange={handleChange}
      />
    </>
  );
};
ReactSelect.propTypes = {
  options: PropTypes.string,
  defaultValues: PropTypes.array,
  label: PropTypes.string,
};
ReactSelect.defaultProps = {
  defaultValues: [],
};
export default ReactSelect;
