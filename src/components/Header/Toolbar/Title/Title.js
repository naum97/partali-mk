import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Title.module.css";

const Title = () => (
  <div>
    <span className={classes.Title}>
      <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <strong>партали</strong>
        <span style={{ fontSize: "20px", marginTop: "16px" }}>.мк</span>
      </NavLink>
    </span>
  </div>
);

export default Title;
