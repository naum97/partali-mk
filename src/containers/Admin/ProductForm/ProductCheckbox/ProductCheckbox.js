import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import WhiteContainer from "../../../../components/Admin/WhiteContainer/WhiteContainer";

const useStyles = makeStyles((theme) => ({
  showCheckbox: {
    margin: "12px 0px",
    width: "200px",
  },
}));

const ProductCheckbox = (props) => {
  const classes = useStyles();
  return (
    <WhiteContainer>
      <FormControlLabel
        className={classes.showCheckbox}
        control={
          <Checkbox
            checked={props.showInOnlineStore}
            onChange={props.handleShowInOnlineStore}
            name="checkedB"
            color="primary"
          />
        }
        label="Show in online store"
      />
    </WhiteContainer>
  );
};

export default ProductCheckbox;
