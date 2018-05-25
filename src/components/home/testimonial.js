import React from "react";
import style from "./homeStyle.css";
import Carousel from "../../elements/carousel/carousel";
const testimonial = () => {
  return (
    <div className="container-fluid  testimonial-img h-25 p-2">
      <div className="container">
        <div className="row p-1 align-items-center">
          <div className="col-xl-6 m-auto">
            <p className="display-4">Testimonials</p>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default testimonial;
