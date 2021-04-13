import React from "react";
import classes from "./BackgroundImage.module.css";
const backgroundImage = (props) => {
  return (
    <img
      className={classes.BackgroundImage}
      src={props.image}
      alt="background"
    ></img>
  );
};

export default backgroundImage;
