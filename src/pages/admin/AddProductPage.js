import React, { useEffect } from "react";
import AdminLayout from "../../components/Admin/AdminLayout/AdminLayout";
import axios from "axios";
import ProductForm from "../../containers/Admin/ProductForm/ProductForm";
import AdminProductContext from "../../context/AdminProductContext";
const AddProductPage = (props) => {
  const [productName, setProductName] = React.useState("Product name");
  const [productDescription, setProductDescription] = React.useState("");
  const [productPrice, setProductPrice] = React.useState(0);
  // const [productStock, setProductStock] = React.useState(0);
  const [productBoutique, setProductBoutique] = React.useState("");
  const [productColors, setProductColors] = React.useState([
    "red",
    "green",
    "blue",
  ]);
  const [productSizes, setProductSizes] = React.useState(["S", "M", "L"]);
  const [productCollections, setProductCollections] = React.useState([
    "Јакни",
    "Сакоа",
    "Капути",
  ]);

  const [
    selectedProductCollections,
    setSelectedProductCollections,
  ] = React.useState([]);

  const [selectedColors, setSelectedColors] = React.useState([]);
  const [selectedSizes, setSelectedSizes] = React.useState([]);

  //todo: convert this to objects
  const [boutiques, setBoutiques] = React.useState([
    "Бутик 1",
    "Бутик 2",
    "Бутик 3",
  ]);

  const [editResponse, setEditResponse] = React.useState(null);
  const [productDetails, setProductDetails] = React.useState([]);

  //todo: finish this
  const submitData = () => {
    const data = {
      name: productName,
      description: productDescription,
      price: productPrice,
      collection: selectedProductCollections,
      amountInStock: 250,
      supplierName: productBoutique,
      productDetails: productDetails,
    };
    axios
      .post("http://localhost:8080/api/v1/products/add-product", data)
      .then((response) => {
        console.log(response);
        alert("Succesfully added product\n" + response.data);
      });
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
