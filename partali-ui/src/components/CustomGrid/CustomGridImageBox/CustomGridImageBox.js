import classes from "./CustomGridImageBox.module.css";
import React from "react";
import { Parallax } from "react-parallax";

const CustomGridImageBox = (props) => {
  return (
    <div className={classes.Container}>
      <Parallax
        className={classes.Parallax}
        bgImage={props.image}
        strength="500"
        bgImageStyle={{ filter: `brightness(90%)` }}
      >
        {props.children}
      </Parallax>
    </div>
  );
};

export default CustomGridImageBox;
