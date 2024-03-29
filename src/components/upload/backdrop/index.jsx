import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export const BackdropContext = React.createContext();

export default function SimpleBackdrop({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const closeBackdrop = () => {
    setOpen(false);
  };
  const showBackdrop = () => {
    setOpen(!open);
  };

  return (
    <BackdropContext.Provider value={(closeBackdrop, showBackdrop)}>
      <Backdrop className={classes.backdrop} open={open} onClick={closeBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {children}
    </BackdropContext.Provider>
  );
}
SimpleBackdrop.propTypes = {
  children: PropTypes.any,
};
