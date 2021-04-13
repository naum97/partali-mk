import React from "react";

const context = {
  productName: "",
  setProductName: () => {},
  productPrice: 0,
  setProductPrice: () => {},
  setProductDescription: () => {},
  productColors: [],
  setProductColors: () => {},
  selectedColors: [],
  setSelectedColors: () => {},
  productSizes: [],
  setProductSizes: () => {},
  selectedSizes: [],
  setSelectedSizes: () => {},
  productCollections: [],
  setProductCollections: () => {},
  setSelectedProductCollections: () => {},
  boutiques: [],
  setBoutiques: () => {},
  setProductBoutique: () => {},
  productDetails: [],
  setProductDetails: () => {},
};

const AdminProductContext = React.createContext(context);

export default AdminProductContext;
