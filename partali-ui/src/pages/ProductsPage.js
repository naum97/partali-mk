import classes from "./ProductsPage.module.css";
import React from "react";
import ProductGrid from "./../containers/ProductGrid/ProductGrid";
import ProductFilters from "../containers/ProductFilters/ProductFilters";
const ProductsPage = () => {
  return (
    <div className={classes.Container}>
      <ProductFilters />
      <ProductGrid />
    </div>
  );
};

export default ProductsPage;
