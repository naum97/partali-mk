import classes from "./ProductGrid.module.css";
import React from "react";
import { Grid } from "@material-ui/core";
import ProductItem from "./ProductItem/ProductItem";
import image from "./../../assets/images/bg_img.webp";
import Modal from "./../../components/Modal/Modal";
import QuickViewProduct from "./../../components/QuickViewProduct/QuickViewProduct";

//todo: pull items from database
const ProductGrid = () => {
  const [showQuickView, setShowQuickView] = React.useState(false);

  return (
    <div className={classes.Container}>
      <Modal modalClosed={() => setShowQuickView(false)} show={showQuickView}>
        <QuickViewProduct />
      </Modal>
      <Grid container spacing={4} direction="row" justify="flex-start">
        <ProductItem clicked={setShowQuickView} image={image} />
        <ProductItem clicked={setShowQuickView} image={image} />
        <ProductItem clicked={setShowQuickView} image={image} />
        <ProductItem clicked={setShowQuickView} image={image} />
        <ProductItem clicked={setShowQuickView} image={image} />
        <ProductItem clicked={setShowQuickView} image={image} />
        <ProductItem clicked={setShowQuickView} image={image} />
        <ProductItem clicked={setShowQuickView} image={image} />
        <ProductItem clicked={setShowQuickView} image={image} />
      </Grid>
    </div>
  );
};

export default ProductGrid;
