import React, { useState } from "react";
import classes from "./ShoppingItem.module.css";
import ShoppingItemButton from "./ShoppingItemButton/ShoppingItemButton";
const ShoppingItem = (props) => {
  const [showButton, setShowButton] = useState(false);
  return (
    <div
      className={classes.ShoppingItem}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <img
        className={classes.Image}
        src={props.image}
        alt="some alt text"
      ></img>
      <ShoppingItemButton
        itemName={props.itemName}
        itemPrice={props.itemPrice}
        isButtonShown={showButton}
      />
    </div>
  );
};
export default ShoppingItem;
