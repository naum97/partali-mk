import React from "react";
import classes from "./BrandStrip.module.css";
// import logo from "./../../assets/logo/logo.png";
const brandStrip = () => (
  <div className={classes.BrandStrip}>
    <div className={classes.BrandItem}>
      <div className={classes.DashLine}></div>
      <p>биди дел од нашата заедница</p>
    </div>
    <div className={classes.BrandItem}>
      <div className={classes.DashLine}></div>
      <p>купувај уникатно и локално</p>
    </div>
    <div className={classes.BrandItem}>
      <div className={classes.DashLine}></div>
      {/* <img src={logo} width="50px" height="50px" /> */}
      <p>поддржи ги малите бизниси</p>
    </div>
  </div>
);

export default brandStrip;
