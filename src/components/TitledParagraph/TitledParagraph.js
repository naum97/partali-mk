import classes from "./TitledParagraph.module.css";
import React from "react";

const TitledParagraph = (props) => {
  return (
    <React.Fragment>
      <span className={classes.Title}>{props.title}</span>
      <div className={classes.DashLine}></div>
      <p className={classes.Paragraph}>{props.text}</p>
    </React.Fragment>
  );
};

export default TitledParagraph;
