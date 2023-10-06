/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Slider.scss";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoChangeImages = () => {
      nextSlide();
    };
  
    const interval = setInterval(autoChangeImages, 5000);
  
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="image-slider">
      <div className="image-slider__container">
        <button onClick={prevSlide}>&#8249;</button>
        <img src={images[currentImageIndex]} alt="Slider" />
        <button onClick={nextSlide}>&#8250;</button>
      </div>
      <p>{currentImageIndex + 1}/{ images.length }</p>
    </div>
  );
};

export default Slider;
