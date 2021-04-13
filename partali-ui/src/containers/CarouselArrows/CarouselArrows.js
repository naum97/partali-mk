import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./CarouselArrows.module.css";

const CustomLeftArrow = ({ onClick }) => (
  <i className={classes.CustomLeftArrow} onClick={() => onClick()}>
    <FontAwesomeIcon icon={faAngleLeft} />
  </i>
);

const CustomRightArrow = ({ onClick }) => (
  <i className={classes.CustomRightArrow} onClick={() => onClick()}>
    <FontAwesomeIcon icon={faAngleRight} />
  </i>
);

export { CustomLeftArrow, CustomRightArrow };
