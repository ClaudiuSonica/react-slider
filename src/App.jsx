import { useState } from "react";
import Header from "./components/atoms/header/Header";
import Slider from "./components/molecules/slider/Slider";

const initialImages = [
  "/assets/img1.jpg",
  "/assets/img2.jpg",
  "/assets/img3.jpg",
  "/assets/img4.jpg",
  "/assets/img5.jpg",
  "/assets/img6.jpg",
  "/assets/img7.jpg",
  "/assets/img8.jpg",
  "/assets/img9.jpg",
  "/assets/img10.jpg",
];

const App = () => {
  const [images, setImages] = useState(initialImages);

  const addImage = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages([...images, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Header />
      <Slider images={images} addImage={addImage} />
    </>
  );
};

export default App;
