import React from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./ProductItem.module.css";
import QuickViewBox from "../../../components/QuickViewBox/QuickViewBox";
const ProductItem = (props) => {
  const [isButtonVisible, setButtonVisible] = React.useState(false);
  return (
    <Grid item>
      <div
        onMouseEnter={() => setButtonVisible(true)}
        onMouseLeave={() => setButtonVisible(false)}
        className={classes.Item}
      >
        <QuickViewBox
          image={props.image}
          alt="some text"
          width="252"
          height="254"
          buttonHeight="60"
          isButtonVisible={isButtonVisible}
          buttonText="Брз преглед"
          clicked={props.clicked}
        />
      </div>
    </Grid>
  );
};

export default ProductItem;
