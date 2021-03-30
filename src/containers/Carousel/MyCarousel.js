import React from "react";
import classes from "./MyCarousel.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "../CarouselItem/CarouselItem";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "../CarouselArrows/CarouselArrows";
import Modal from "../../components/Modal/Modal";
import QuickViewProduct from "./../../components/QuickViewProduct/QuickViewProduct";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1500 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 1499, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 675 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 674, min: 0 },
    items: 1,
  },
};

const MyCarousel = (props) => {
  const [showQuickView, setShowQuickView] = React.useState(false);
  return (
    <React.Fragment>
      <Modal modalClosed={() => setShowQuickView(false)} show={showQuickView}>
        <QuickViewProduct />
      </Modal>
      <div className={classes.MyCarousel}>
        <div className={classes.CarouselTitle}>
          <span>НАША ПРЕПОРАКА</span>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          <CarouselItem clicked={setShowQuickView} />
          <CarouselItem clicked={setShowQuickView} />
          <CarouselItem clicked={setShowQuickView} />
          <CarouselItem clicked={setShowQuickView} />
          <CarouselItem clicked={setShowQuickView} />
          <CarouselItem clicked={setShowQuickView} />
          <CarouselItem clicked={setShowQuickView} />
          <CarouselItem clicked={setShowQuickView} />
          <CarouselItem clicked={setShowQuickView} />
          <CarouselItem clicked={setShowQuickView} />
          <CarouselItem clicked={setShowQuickView} />
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default MyCarousel;
