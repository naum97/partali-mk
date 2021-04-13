import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddButton from "../../../components/Admin/AddButton/AddButton";
import AddIcon from "@material-ui/icons/Add";
import ProductName from "./ProductName/ProductName";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductAdditionalInfo from "./ProductAdditionalInfo/ProductAdditionalInfo";
import ProductCollections from "./ProductCollections/ProductCollections";
import ProductBoutiques from "./ProductBoutiques/ProductBoutiques";
import ProductQuantityManager from "./ProductQuantityManager/ProductQuantityManager";
import ProductCheckbox from "./ProductCheckbox/ProductCheckbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    marginBottom: theme.spacing(3),
    width: "45%",
  },
}));
const ProductForm = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <ProductName />
        <ProductInfo />
        <ProductAdditionalInfo />
      </div>
      <div className={classes.root} style={{ width: "33%" }}>
        {/* todo: add show in online store functionality */}
        <ProductCheckbox />
        <ProductCollections />
        <ProductBoutiques />
        <ProductQuantityManager />
        <AddButton
          icon={<AddIcon />}
          margin="15px 0px"
          width="100%"
          padding="20px 0px"
          clicked={() => props.submitData()}
        >
          Add product
        </AddButton>
      </div>
    </React.Fragment>
  );
};

export default ProductForm;
