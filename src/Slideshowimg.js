
import React from 'react';
import Slider from 'react-slick';
import homeimg from './images/homeimg.webp';
import homeimg1 from './images/homeimg1.webp';
import './Slideshowimg.css';

const Slideshowimg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        <div>
          <img src={homeimg} alt="Image 1" />
        </div>
        <div>
          <img src={homeimg1} alt="Image 2" />
        </div>
      </Slider>
    </div>
  );
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default Slideshowimg;

