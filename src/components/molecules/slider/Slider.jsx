/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Slider.scss";

const Slider = ({ images, addImage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      addImage(selectedFile);
      setSelectedFile(null);
    }
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
      <p>
        {currentImageIndex + 1}/{images.length}
      </p>
      <div className="image-slider__container">
        <button onClick={prevSlide}>&#8249;</button>
        <img src={images[currentImageIndex]} alt="Slider" />
        <button onClick={nextSlide}>&#8250;</button>
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleFileChange}
          type="file"
          accept="image/*"
          name="url"
        />
        <button type="submit">Add Image</button>
      </form>
    </div>
  );
};

export default Slider;
