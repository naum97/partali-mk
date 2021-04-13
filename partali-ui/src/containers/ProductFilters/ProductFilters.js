import React from "react";
import "./ProductFilters.scss";
import ProductFilterItem from "./ProductFilterItem/ProductFilterItem";
import CustomSlider from "./CustomSlider/CustomSlider";
import ColorFilter from "./ColorFilter/ColorFilter";
import { NavLink } from "react-router-dom";

// todo: this will be pulled from backend
const mapOfColors = {
  red: "црвена",
  green: "зелена",
  blue: "сина",
  purple: "violetova",
};

const ProductFilters = () => {
  const [colorTitle, setColorTitle] = React.useState("Боја");

  const handleTitle = (title) => {
    setColorTitle(title);
  };

  return (
    <div className="Container">
      <h2>Филтри</h2>
      <div style={{ width: "100%", borderTop: "1px solid black" }}></div>

      <ProductFilterItem triggerTitle="Категорија">
        <ul className="CategoryList">
          <li>
            <NavLink to="/jakni">Jakni</NavLink>
          </li>
          <li>
            <NavLink to="/jakni">Sakoa</NavLink>
          </li>
          <li>
            <NavLink to="/jakni">Kaputi</NavLink>
          </li>
        </ul>
      </ProductFilterItem>
      <ProductFilterItem triggerTitle="Цена">
        <CustomSlider initValues={[1000, 1600]} />
      </ProductFilterItem>
      <ProductFilterItem triggerTitle={colorTitle}>
        <ColorFilter colours={mapOfColors} handleTitle={handleTitle} />
      </ProductFilterItem>
      <ProductFilterItem triggerTitle="Број">
        {/* todo: add list of checkboxes here */}
        <p>broj1</p>
        <p>broj1</p>
        <p>broj1</p>
        <p>broj1</p>
      </ProductFilterItem>
    </div>
  );
};
export default ProductFilters;
