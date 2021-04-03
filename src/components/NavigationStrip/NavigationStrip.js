import React from "react";
import classes from "./NavigationStrip.module.css";
import image from "./../../assets/images/bg_img.webp";
import BackgroundImage from "../BackgroundImage/BackgroundImage";

const navigationStrip = () => {
  return (
    <div className={classes.NavStrip}>
      <div className={classes.NavStripItem}>
        <BackgroundImage image={image} />
        <span
          style={{
            fontFamily: "Lobster",
            fontSize: "26px",
            position: "relative",
            bottom: "10px",
            right: "4px",
          }}
        >
          Нашиот
        </span>
        <span style={{ letterSpacing: "0.2em" }}>БРЕНД</span>
        <div className={classes.DashLine}></div>
        <button>ПРОЧИТАЈ ЗА НАШАТА ПРИКАЗНА</button>
      </div>
      <div className={classes.NavStripItem}>
        <BackgroundImage image={image} />
        <span
          style={{
            fontFamily: "Lobster",
            fontSize: "26px",
            position: "relative",
            bottom: "10px",
            right: "6px",
          }}
        >
          Нашата
        </span>
        <span style={{ letterSpacing: "0.2em" }}>МИСИЈА</span>
        <div className={classes.DashLine}></div>
        <button>ПРОЧИТАЈ ЗА НАШАТА ЦЕЛ</button>
      </div>
      <div className={classes.NavStripItem}>
        <BackgroundImage image={image} />
        <span
          style={{
            fontFamily: "Lobster",
            fontSize: "26px",
            position: "relative",
            bottom: "10px",
            right: "4px",
          }}
        >
          Нашите
        </span>
        <span style={{ letterSpacing: "0.2em" }}>ПАРТНЕРИ</span>
        <div className={classes.DashLine}></div>
        <button>ДОЗНАЈ ПОВЕЌЕ ЗА БУТИЦИТЕ</button>
      </div>
    </div>
  );
};

export default navigationStrip;
