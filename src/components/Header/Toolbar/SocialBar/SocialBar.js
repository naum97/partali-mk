import React from "react";
import classes from "./SocialBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const socialBar = () => (
  <div>
    <FontAwesomeIcon
      style={{ margin: "0px 30px" }}
      className={classes.AwesomeFont}
      icon={faFacebookF}
    />
    <FontAwesomeIcon className={classes.AwesomeFont} icon={faInstagram} />
  </div>
);

export default socialBar;
