import { FC, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { sliderData } from "./sliderData";
import {
  SCarouselWrapper,
  SImageWrapper,
  SArrowButton,
} from "./Carousel.styled";
import { PrevIcon, NextIcon } from "../../assets/icons";

const Carousel: FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (prevRef.current && nextRef.current) {
        prevRef.current.classList.add("custom-prev");
        nextRef.current.classList.add("custom-next");
      }
    }, 100);
  }, [prevRef, nextRef]);

  return (
    <SCarouselWrapper>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SImageWrapper>
              <img src={slide} alt={`Slide ${index + 1}`} />
            </SImageWrapper>
          </SwiperSlide>
        ))}
      </Swiper>

      <SArrowButton ref={prevRef}>
        <PrevIcon />
      </SArrowButton>

      <SArrowButton ref={nextRef}>
        <NextIcon />
      </SArrowButton>
    </SCarouselWrapper>
  );
};

export default Carousel;
