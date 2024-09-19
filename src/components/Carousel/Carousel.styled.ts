import styled from "styled-components";
import Slider from "react-slick";

export const SSlider = styled(Slider)`
  width: 100%;
  position: relative;
  margin: 0 auto;

  @media (min-width: 1440px) {
    padding-inline: 2.65rem;
  }
`;

export const SCarouselWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  .slick-list {
    overflow: hidden;
  }

  .slick-track {
    display: flex;
    align-items: center;
    gap: 2.4rem;

    @media (max-width: 768px) {
      gap: 1.6rem;
    }

    @media (max-width: 500px) {
      gap: 1rem;
    }
  }

  .slick-slide {
    width: 100;
  }

  .slick-prev,
  .slick-next {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: rgba(56, 75, 255, 0.58);
    z-index: 1000;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    display: none;

    &:after {
      display: none;
    }

    @media (min-width: 1440px) {
      display: block;
    }
  }

  .slick-prev {
    left: 0.5rem;
  }

  .slick-next {
    right: 0.5rem;
  }
`;

export const SImageWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  height: 29rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


`;
