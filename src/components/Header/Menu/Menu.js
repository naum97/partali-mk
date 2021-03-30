import React from "react";
import classes from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  return (
    <nav>
      <ul className={classes.Menu}>
        <li>
          <NavLink exact to="/">
            Дома
          </NavLink>
        </li>
        <li className={classes.BuyButton}>
          <NavLink exact to="/all-products">
            Купи
          </NavLink>
        </li>
        <div className={classes.SubMenu}>
          <div className={classes.SubMenuColumn}>
            <a href="/">Купи</a>
            <a href="/">Купи</a>
            <a href="/">Купи</a>
            <a href="/">Купи</a>
            <a href="/">Купи</a>
          </div>
          <div className={classes.SubMenuColumn}>
            <a href="/">Купи</a>
            <a href="/">Купи</a>
            <a href="/">Купи</a>
            <a href="/">Купи</a>
            <a href="/">Купи</a>
          </div>
          <div className={classes.SubMenuColumn}>
            <a href="/">Купи</a>
            <a href="/">Купи</a>
            <a href="/">Купи</a>
            <a href="/">Купи</a>
            <a href="/">Купи</a>
          </div>
        </div>
        <li>
          <NavLink exact to="/about-us">
            За Нас
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact-us">
            Контакт
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
