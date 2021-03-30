import React from "react";
import classes from "./Strip.module.css";
import { Parallax } from "react-parallax";
import image from "../../assets/images/bg_img.webp";
const Strip = () => (
  <div className={classes.Container}>
    <Parallax
      className={classes.Parallax}
      bgImage={image}
      strength="1000"
      bgImageAlt="background"
      bgImageStyle={{ filter: `brightness(90%)` }}
    >
      <div className={[classes.CenterText, classes.CustomFont].join(" ")}>
        <span>
          ПАРТАЛИ
          <span style={{ fontSize: "13px" }}>.MK</span>
        </span>
        <span>УНИКАТНА ПЛАТФОРМА ЗА УНИКАТНИ ЛУЃЕ</span>
        <button className={classes.CustomFont}>ЗАПОЧНИ СО ШОПИНГ</button>
      </div>
    </Parallax>
  </div>
);

export default Strip;
