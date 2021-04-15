import React from "react";
import "../App.css";
import { SliderData } from "./SliderData";
import left from "../left-arrow.svg";
import right from "../right-arrow.svg";
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = React.useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const manualSlide = (index) => {
    setCurrent(index);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="page">
      <section className="slider">
        <img
          src={left}
          className="arrows left-arrow"
          alt="left-arrow"
          onClick={prevSlide}
        />
        <img
          src={right}
          className="arrows right-arrow"
          alt="right-arrow"
          onClick={nextSlide}
        />
        {SliderData.map((slide, index) =>
          slide.type === "image" ? (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.key} alt="slide-image" className="image" />
              )}
            </div>
          ) : (
            <div
              className={index === current ? "slide active " : "slide "}
              id={index}
            >
              {index === current && slide.key}
            </div>
          )
        )}
      </section>
      <div class="slides">
        {SliderData.map((slide, index) => {
          return slide.type === "image" ? (
            <div id={index}>
              <img
                src={`${slide.key}`}
                className="mobile-image"
                alt={slide.type}
              />
            </div>
          ) : (
            <div className="html-slide" key={index}>
              {slide.key}
            </div>
          );
        })}
      </div>
      <div className="circles">
        {SliderData.map((slide, index) => (
          <div className="circle" onClick={(e) => manualSlide(index)}></div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
