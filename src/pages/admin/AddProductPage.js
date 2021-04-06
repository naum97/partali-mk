import React from "react";
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
      category: selectedProductCollections,
      amountInStock: 250,
      supplierName: productSupplier,
      colors: selectedColors,
    };
    axios
      .post("http://localhost:8080/api/v1/products/add-product", data)
      .then((response) => {
        console.log(response);
        alert("Succesfully added product\n" + response.data);
      });
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
      </div>
    </AdminLayout>
  );
};

export default AddProductPage;
