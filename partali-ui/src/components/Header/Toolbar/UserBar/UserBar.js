import classes from "./UserBar.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "@material-ui/core";
const UserBar = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        KOSNICKA KOSNICKA MOJA JHASGAJSHGASFJHGASJHG
      </Drawer>
      <div className={classes.Container}>
        <div className={classes.LoginButton}>
          <span>
            <FontAwesomeIcon
              style={{ marginRight: "10px" }}
              icon={faUserCircle}
              size="2x"
            />
          </span>
          <span className={classes.HideInMobile}>Најави се</span>
        </div>
        <div
          onClick={() => setDrawerOpen(true)}
          className={classes.LoginButton}
        >
          <span>
            <FontAwesomeIcon
              style={{ marginRight: "5px" }}
              icon={faShoppingBag}
              size="2x"
            />
          </span>
          <span className={classes.Number}>0</span>
          <span className={classes.HideInMobile}>кошничка</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserBar;
