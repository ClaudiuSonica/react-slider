import Header from "./components/atoms/header/Header";
import Slider from "./components/molecules/slider/Slider";

const images = [
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
]

const App = () => {
  return (
    <>
      <Header />
      <Slider images={images} />
    </>
  )
}

export default App;