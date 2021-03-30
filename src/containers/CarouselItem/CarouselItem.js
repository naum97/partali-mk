import React, { useState } from "react";
import classes from "./CarouselItem.module.css";
import image from "../../assets/images/photo-1549989476-69a92fa57c36.jpeg";
import QuickViewBox from "./../../components/QuickViewBox/QuickViewBox";
const CarouselItem = (props) => {
  const [isButtonVisible, setButtonVisible] = useState(false);
  return (
    <div
      className={classes.Container}
      onMouseEnter={() => setButtonVisible(true)}
      onMouseLeave={() => setButtonVisible(false)}
    >
      <QuickViewBox
        image={image}
        alt="some text"
        width="150"
        height="150"
        buttonHeight="50"
        isButtonVisible={isButtonVisible}
        buttonText="Брз преглед"
        clicked={props.clicked}
        fontSize="12"
      />
    </div>
  );
};

export default CarouselItem;
