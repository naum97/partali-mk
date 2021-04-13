import classes from "./CustomGridContentBox.module.css";
import React from "react";

const CustomGridContentBox = (props) => {
  return <div className={classes.Container}>{props.children}</div>;
};

export default CustomGridContentBox;
