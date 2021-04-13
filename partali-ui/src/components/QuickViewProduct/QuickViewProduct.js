import classes from "./QuickViewProduct.module.css";
import React from "react";
import image from "../../assets/images/boximage1.webp";
import ColorFilter from "../../containers/ProductFilters/ColorFilter/ColorFilter";
import { NavLink } from "react-router-dom";

// todo: this will be pulled from backend
const mapOfColors = {
  red: "црвена",
  green: "зелена",
  blue: "сина",
  purple: "violetova",
};

const defaultColorTitle = "Боја";
const QuickViewProduct = (props) => {
  const [colorTitle, setColorTitle] = React.useState(defaultColorTitle);

  const handleTitle = (title) => {
    setColorTitle(title);
  };

  return (
    <div className={classes.Container}>
      <img src={image} alt="a product"></img>
      <div className={classes.ProductInfo}>
        <span style={{ fontSize: "28px" }}>Фармерки</span>
        <p style={{ fontSize: "17px", marginBottom: "40px" }}>ден550,00</p>
        <span style={{ marginBottom: "10px" }}>{colorTitle}</span>
        <ColorFilter colours={mapOfColors} handleTitle={handleTitle} />
        <span style={{ margin: "20px 0px" }}>Број</span>
        <select className={classes.Select}>
          <option value="" selected disabled>
            Одбери
          </option>
          <option value={10}>Ten</option>
          <option value={20}>Ten</option>
          <option value={30}>Ten</option>
          <option value={40}>Ten</option>
        </select>
        <span style={{ margin: "20px 0px" }}>Количина</span>
        <input
          className={classes.QuantityInput}
          type="number"
          min={0}
          defaultValue={0}
        ></input>
        <button className={classes.BuyButton}>ДОДАДИ ВО КОШНИЧКА</button>
        <NavLink className={classes.MoreDetailLink} to="/all-products" exact>
          Повеќе детали
        </NavLink>
      </div>
    </div>
  );
};

export default QuickViewProduct;
