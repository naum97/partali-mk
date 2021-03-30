import React, { useState, useEffect, useCallback } from "react";
import classes from "./Header.module.css";
import Toolbar from "./Toolbar/Toolbar";
import Menu from "./Menu/Menu";

const Header = (props) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const shouldBeVisible =
      prevScrollPos > currentScrollPos || currentScrollPos < 300;

    setPrevScrollPos(currentScrollPos);
    setVisible(shouldBeVisible);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <header
      style={{
        top: visible ? "0px" : "-200px",
        transitionDelay: visible ? "0.6s" : "0s",
      }}
      className={classes.Header}
    >
      <Toolbar />
      <Menu />
    </header>
  );
};

export default Header;
