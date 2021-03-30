import React from "react";
import classes from "./Toolbar.module.css";
import SocialBar from "./SocialBar/SocialBar";
import Title from "./Title/Title";
import UserBar from "./UserBar/UserBar";

const toolbar = () => (
  <div className={classes.Toolbar}>
    <SocialBar />
    <Title />
    <UserBar />
  </div>
);

export default toolbar;
