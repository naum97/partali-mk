import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const facebookIcon = <FontAwesomeIcon icon={faFacebook}> /</FontAwesomeIcon>;
const instagramIcon = <FontAwesomeIcon icon={faInstagram}> /</FontAwesomeIcon>;

const footer = () => (
  <footer className={classes.Footer}>
    <div className={classes.FooterMenu}>
      <div className={classes.Title}>
        <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <strong>партали.мк</strong>
        </span>
      </div>
      <div className={classes.FooterMenuItem}>
        <span>Компанија</span>
        <p>Контакт</p>
        <p>За нас</p>
        <p>Листа на бутици</p>
      </div>
      <div className={classes.FooterMenuItem}>
        <span>Помош</span>
        <p>Производи</p>
        <p>Плаќања</p>
        <p>Достава</p>
        <p>Замени и враќања</p>
        <p>Најчесто поставувани прашања</p>
        <p>Табела со броеви | Дијаграм за мерење</p>
      </div>
      <div className={classes.FooterMenuItem}>
        <span>Следете нè</span>
        <p className={classes.SocialMedia}>
          <span style={{ margin: "0px 8px", fontSize: "20px" }}>
            {facebookIcon}
          </span>
          <span>Facebook</span>
        </p>
        <p className={classes.SocialMedia}>
          <span style={{ margin: "0px 8px", fontSize: "20px" }}>
            {instagramIcon}
          </span>
          <span>Instagram</span>
        </p>
      </div>
      <div className={classes.FooterMenuItem}>
        <span>Политики</span>
        <p>Политика за приватност</p>
        <p>Услови за купување</p>
      </div>
    </div>
    <div className={classes.Copyright}>@2021 by partali.mk</div>
  </footer>
);

export default footer;
