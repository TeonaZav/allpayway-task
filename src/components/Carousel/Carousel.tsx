import React from "react";
import { sliderData } from "./sliderData";
import { SCarouselWrapper, SImageWrapper, SSlider } from "./Carousel.styled";
import { PrevIcon, NextIcon } from "../../assets/icons";

interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button className="slick-prev" onClick={onClick}>
      <PrevIcon />
    </button>
  );
};

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button className="slick-next" onClick={onClick}>
      <NextIcon />
    </button>
  );
};

const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SCarouselWrapper>
      <SSlider {...settings}>
        {sliderData.map((slide, index) => (
          <SImageWrapper key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </SImageWrapper>
        ))}
      </SSlider>
    </SCarouselWrapper>
  );
};

export default Carousel;
