import React from "react";

const context = {
  productName: "",
  setProductName: () => {},
  productPrice: 0,
  setProductPrice: () => {},
  setProductDescription: () => {},
  setProductCare: () => {},
  setProductMaterials: () => {},
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
  totalStock: 0,
  setTotalStock: () => {},
  setProductRibbon: () => {},
};

const AdminProductContext = React.createContext(context);

export default AdminProductContext;
