import React, { useEffect } from "react";
import AdminLayout from "../../components/Admin/AdminLayout/AdminLayout";
import axios from "axios";
import ProductForm from "../../containers/Admin/ProductForm/ProductForm";
import AdminProductContext from "../../context/AdminProductContext";
const AddProductPage = (props) => {
  const [productName, setProductName] = React.useState("Product name");
  const [productDescription, setProductDescription] = React.useState(null);
  const [productCare, setProductCare] = React.useState(null);
  const [productMaterials, setProductMaterials] = React.useState(null);
  const [productRibbon, setProductRibbon] = React.useState(null);
  const [productPrice, setProductPrice] = React.useState(null);
  const [totalStock, setTotalStock] = React.useState(0);
  const [productBoutique, setProductBoutique] = React.useState(null);

  const [productColors, setProductColors] = React.useState([]);
  const [productSizes, setProductSizes] = React.useState([]);
  const [productCollections, setProductCollections] = React.useState([]);

  const [
    selectedProductCollections,
    setSelectedProductCollections,
  ] = React.useState([]);

  const [selectedColors, setSelectedColors] = React.useState([]);
  const [selectedSizes, setSelectedSizes] = React.useState([]);

  const [boutiques, setBoutiques] = React.useState([]);

  const [editResponse, setEditResponse] = React.useState(null);
  const [productDetails, setProductDetails] = React.useState([]);

  const submitData = () => {
    const data = {
      name: productName,
      description: productDescription,
      price: productPrice,
      collections: selectedProductCollections,
      amountInStock: totalStock,
      supplierName: productBoutique,
      ribbon: productRibbon,
      care: productCare,
      materials: productMaterials,
      productDetails: productDetails,
    };
    axios
      .post("http://localhost:8080/api/v1/products/add-product", data)
      .then((response) => {
        console.log(response);
        alert("Succesfully added product\n" + response.data.name);
      });
    console.log(data);
  };

  //this is NOT used here, will be used in EditProduct.js in the future
  useEffect(() => {
    const id = props.location.state;
    if (!id || id.length === 0) {
      return;
    }

    const queryParam = id.join();
    axios
      .get("http://localhost:8080/api/v1/products?id=" + queryParam)
      .then((response) => {
        setEditResponse(response.data);
      });
  }, [props.location.state]);

  const formProps = {
    productName,
    setProductName,
    productPrice,
    setProductPrice,
    setProductDescription,
    setProductCare,
    setProductMaterials,
    productColors,
    setProductColors,
    selectedColors,
    setSelectedColors,
    productSizes,
    setProductSizes,
    selectedSizes,
    setSelectedSizes,
    productCollections,
    setProductCollections,
    setSelectedProductCollections,
    boutiques,
    setBoutiques,
    setProductBoutique,
    productDetails,
    setProductDetails,
    totalStock,
    setTotalStock,
    setProductRibbon,
  };
  return (
    <AdminLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0px 110px",
        }}
      >
        <AdminProductContext.Provider value={formProps}>
          <ProductForm submitData={submitData} />
        </AdminProductContext.Provider>
      </div>
    </AdminLayout>
  );
};

export default AddProductPage;
