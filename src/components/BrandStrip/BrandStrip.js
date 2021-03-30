import React from "react";
import classes from "./BrandStrip.module.css";
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
      <p>поддржи ги малите бизниси</p>
    </div>
  </div>
);

export default brandStrip;
