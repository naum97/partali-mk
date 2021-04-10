import React, { useEffect } from "react";
import AdminLayout from "../../components/Admin/AdminLayout/AdminLayout";
import axios from "axios";
import ProductInfo from "../../containers/Admin/ProductInfo/ProductInfo";
import ProductCategory from "../../containers/Admin/ProductCategory/ProductCategory";
const AddProductPage = (props) => {
  const [showSaleInput, setShowSaleInput] = React.useState(false);
  const [productSalePrice, setSalePrice] = React.useState(0);

  const [productName, setProductName] = React.useState("Product name");
  const [productDescription, setProductDescription] = React.useState("");
  const [productPrice, setProductPrice] = React.useState(0);
  const [productStock, setProductStock] = React.useState(0);
  const [productSupplier, setProductSupplier] = React.useState("");
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
  const handleProductName = (event, newValue) => {
    if (event.target.value === "") {
      setProductName("Product name");
      return;
    }
    setProductName(event.target.value);
  };

  const handleProductSalePrice = (newValue) => {
    const salePrice = (newValue / 100) * productPrice;
    setSalePrice(productPrice - salePrice);
  };

  //todo: finish this
  const submitData = () => {
    const data = {
      name: productName,
      description: productDescription,
      price: productPrice,
      // todo: fix this later, remove join, add manyToMany relationship
      collection: selectedProductCollections.join(),
      amountInStock: 250,
      supplierName: productSupplier,
      productDetails: [
        {
          color: "red",
          size: "L",
          stock: 10,
        },
        {
          color: "red",
          size: "M",
          stock: 7,
        },
        {
          color: "black",
          size: "S",
          stock: 100,
        },
      ],
    };
    axios
      .post("http://localhost:8080/api/v1/products/add-product", data)
      .then((response) => {
        console.log(response);
        alert("Succesfully added product\n" + response.data);
      });
  };

  useEffect(() => {
    const id = props.location.state;
    if (!id || id.length == 0) {
      return;
    }

    const queryParam = id.join();
    axios
      .get("http://localhost:8080/api/v1/products?id=" + queryParam)
      .then((response) => {
        setEditResponse(response.data);
      });
  }, []);

  let productInfoComponents = (editResponse && (
    <React.Fragment>
      <ProductInfo
        productName={productName}
        handleChange={handleProductName}
        handleProductPrice={setProductPrice}
        showSaleInput={showSaleInput}
        handleSale={setShowSaleInput}
        handleSaleChange={handleProductSalePrice}
        productSalePrice={productSalePrice}
        handleProductDescription={setProductDescription}
        colors={productColors}
        handleColors={setProductColors}
        sizes={productSizes}
        handleSizes={setProductSizes}
        selectColors={setSelectedColors}
        selectSizes={setSelectedSizes}
        editResponse={editResponse}
      />
      <ProductCategory
        categories={productCollections}
        handleproductCollections={setProductCollections}
        boutiques={boutiques}
        handleBoutiques={setBoutiques}
        selectBoutique={setProductSupplier}
        selectCollections={setSelectedProductCollections}
        submitData={submitData}
        editResponse={editResponse}
      />
    </React.Fragment>
  )) || (
    <React.Fragment>
      <ProductInfo
        productName={productName}
        handleChange={handleProductName}
        handleProductPrice={setProductPrice}
        showSaleInput={showSaleInput}
        handleSale={setShowSaleInput}
        handleSaleChange={handleProductSalePrice}
        productSalePrice={productSalePrice}
        handleProductDescription={setProductDescription}
        colors={productColors}
        handleColors={setProductColors}
        sizes={productSizes}
        handleSizes={setProductSizes}
        selectColors={setSelectedColors}
        selectSizes={setSelectedSizes}
      />
      <ProductCategory
        categories={productCollections}
        handleproductCollections={setProductCollections}
        boutiques={boutiques}
        handleBoutiques={setBoutiques}
        selectBoutique={setProductSupplier}
        selectCollections={setSelectedProductCollections}
        submitData={submitData}
      />
    </React.Fragment>
  );

  return (
    <AdminLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0px 110px",
        }}
      >
        {productInfoComponents}
      </div>
    </AdminLayout>
  );
};

export default AddProductPage;
