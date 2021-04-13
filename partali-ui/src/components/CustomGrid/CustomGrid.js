import classes from "./CustomGrid.module.css";
import React from "react";

const CustomGrid = (props) => {
  return <div className={classes.Container}>{props.children}</div>;
};

export default CustomGrid;
