const customStyles = {
  control: () => ({
    width: "90%",
    height: 48,
    borderRadius: 2,
    display: "flex",
    background: "transparent",
    cursor: "pointer",
    paddingTop: "10px",
    borderBottom: "none",
    margin: "auto",
  }),
  placeholder: () => ({
    paddingTop: "5px",
  }),
  option: () => ({}),
  valueContainer: () => ({
    width: "100%",
    textAlign: "center",
    fontFamily: "Work Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "23px",

    color: "#000000",
  }),
  singleValue: () => ({
    paddingLeft: "14%",
  }),
  // multiValue: () => ({}),
};
export default customStyles;
