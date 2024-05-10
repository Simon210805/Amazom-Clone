import React from "react";
import classes from "./Carousel.module.css";
import { Carousel } from "react-responsive-carousel";
import { img } from "./Data.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
      >
        {img[0].map((item, index) => (
          <div key={index}>
            <img src={item} />
          </div>
        ))}
      </Carousel>
      <div className={classes.divider}></div>
    </div>
  );
}

export default CarouselEffect;
