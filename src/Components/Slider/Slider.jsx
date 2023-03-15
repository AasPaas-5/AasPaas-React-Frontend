import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderPic1 from "../../assets/Slider/SliderPic1.webp";
import SliderPic2 from "../../assets/Slider/SliderPic2.webp";

function Slider() {
  return (
    <Carousel infiniteLoop showStatus={false} showThumbs={false} autoPlay>
      <div>
        <img alt="bike" src={SliderPic1} />
      </div>
      <div>
        <img alt="laptop" src={SliderPic2} />
      </div>
    </Carousel>
  );
}

export default Slider;
