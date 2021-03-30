import React from "react";
import Strip from "./../components/Strip/Strip";
import MyCarousel from "./../containers/Carousel/MyCarousel";
import ShoppingGrid from "./../components/ShoppingGrid/ShoppingGrid";
import BrandStrip from "./../components/BrandStrip/BrandStrip";
import NavigationStrip from "./../components/NavigationStrip/NavigationStrip";
const HomePage = () => (
  <div>
    <Strip />
    <MyCarousel />
    <ShoppingGrid />
    <NavigationStrip />
    <BrandStrip />
  </div>
);

export default HomePage;
