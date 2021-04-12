import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "./../Backdrop/Backdrop";

const modal = (props) => {
  return props.show ? (
    <React.Fragment>
      <Backdrop clicked={props.modalClosed} show={props.show} />
      <div className={classes.Modal} style={props.style}>
        {props.children}
      </div>
    </React.Fragment>
  ) : null;
};

export default modal;
