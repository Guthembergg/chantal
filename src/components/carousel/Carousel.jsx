import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function DemoCarousel() {
  return (
    <Carousel>
      <div>
        <img src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}
