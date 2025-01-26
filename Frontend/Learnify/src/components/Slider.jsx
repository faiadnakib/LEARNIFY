import React, { useState } from "react";

const Slider = () => {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="arrow left" onClick={prevSlide}>
          ❮
        </button>
        <div className="slides">
          <div className="slide">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          </div>
        </div>
        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider;
