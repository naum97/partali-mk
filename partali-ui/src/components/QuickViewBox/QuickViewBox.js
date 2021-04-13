import classes from "./QuickViewBox.module.css";
import React from "react";

const QuickViewBox = (props) => {
  const showButtonHeight = props.height - props.buttonHeight;
  const hideButtonHeight = props.height;
  const buyButtonHeight = props.buttonHeight - 20;

  return (
    <React.Fragment>
      <div className={classes.QuickViewContainer}>
        <img
          src={props.image}
          alt={props.alt}
          width={props.width}
          height={props.height}
        ></img>
        <button
          style={{
            height: `${props.buttonHeight}px`,
            width: `${props.width}px`,
            opacity: props.isButtonVisible ? "1" : "0",
            top: props.isButtonVisible
              ? showButtonHeight + "px"
              : hideButtonHeight + "px",
          }}
          onClick={() => props.clicked(true)}
        >
          {props.buttonText}
        </button>
      </div>
      <div className={classes.ProductInfo}>
        <span style={{ fontSize: "16px" }}>Farmerki</span>
        <span style={{ color: "gray", fontSize: "13px" }}>den255,00</span>
      </div>
      <button
        className={classes.BuyButton}
        style={{
          opacity: props.isButtonVisible ? "1" : "0",
          height: `${buyButtonHeight}px`,
          width: `${props.width}px`,
          fontSize: `${props.fontSize}px`,
        }}
      >
        Додади во кошничка
      </button>
    </React.Fragment>
  );
};

export default QuickViewBox;
