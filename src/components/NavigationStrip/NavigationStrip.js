import React from "react";
import classes from "./NavigationStrip.module.css";
import image from "./../../assets/images/bg_img.webp";
import BackgroundImage from "../BackgroundImage/BackgroundImage";

const navigationStrip = () => {
  return (
    <div className={classes.NavStrip}>
      <div className={classes.NavStripItem}>
        <BackgroundImage image={image} />
        <p>Нашиот</p>
        <p>БРЕНД</p>
        <div className={classes.DashLine}></div>
        <button>ПРОЧИТАЈ ЗА НАШАТА ПРИКАЗНА</button>
      </div>
      <div className={classes.NavStripItem}>
        <BackgroundImage image={image} />
        <p>Нашата</p>
        <p>МИСИЈА</p>
        <div className={classes.DashLine}></div>
        <button>ПРОЧИТАЈ ЗА НАШАТА ЦЕЛ</button>
      </div>
      <div className={classes.NavStripItem}>
        <BackgroundImage image={image} />
        <p>Нашите</p>
        <p>ПАРТНЕРИ</p>
        <div className={classes.DashLine}></div>
        <button>ДОЗНАЈ ПОВЕЌЕ ЗА БУТИЦИТЕ</button>
      </div>
    </div>
  );
};

export default navigationStrip;
