import React from "react";
import image from "./../../assets/images/photo-1549989476-69a92fa57c36.jpeg";
import bgImage from "../../assets/images/boximage1.webp";
import ShoppingItem from "./ShoppingItem/ShoppingItem";
import CustomGrid from "../CustomGrid/CustomGrid";
import CustomGridContentBox from "../CustomGrid/CustomGridContentBox/CustomGridContentBox";
import CustomGridImageBox from "../CustomGrid/CustomGridImageBox/CustomGridImageBox";

const shoppingGrid = () => {
  return (
    <CustomGrid>
      <CustomGridContentBox>
        <ShoppingItem image={image} itemName="kosula1" itemPrice="$300" />
      </CustomGridContentBox>
      <CustomGridImageBox image={bgImage}>
        <span>МОДНО ПАРЧЕ НА НЕДЕЛАТА</span>
      </CustomGridImageBox>
      <CustomGridImageBox image={bgImage}>
        <span>АКСЕСОАР НА НЕДЕЛАТА</span>
      </CustomGridImageBox>
      <CustomGridContentBox>
        <ShoppingItem image={image} itemName="kosula2" itemPrice="$150" />
      </CustomGridContentBox>
    </CustomGrid>
  );
};

export default shoppingGrid;
