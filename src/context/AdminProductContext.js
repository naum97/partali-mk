import React from "react";

const context = {
  productName: "",
  setProductName: () => {},
  productPrice: 0,
  setProductPrice: () => {},
  setProductDescription: () => {},
  productColors: [],
  setProductColors: () => {},
  setSelectedColors: () => {},
  productSizes: [],
  setProductSizes: () => {},
  setSelectedSizes: () => {},
  productCollections: [],
  setProductCollections: () => {},
  setSelectedProductCollections: () => {},
  boutiques: [],
  setBoutiques: () => {},
  setProductBoutique: () => {},
};

const AdminProductContext = React.createContext(context);

export default AdminProductContext;
