import classes from "./ShoppingItemButton.module.css";
import React from "react";

const shoppingItemButton = (props) => (
  <div className={classes.ShoppingButtonContainer}>
    <button
      style={{
        opacity: props.isButtonShown ? "1" : "0",
      }}
    >
      Add To Cart
    </button>
    <div
      style={{
        opacity: props.isButtonShown ? "0" : "1",
      }}
    >
      <p>{props.itemName}</p>
      <p style={{ color: "#ba4c2a" }}>{props.itemPrice}</p>
    </div>
  </div>
);

export default shoppingItemButton;
