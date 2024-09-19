import styled from "styled-components";

export const SArrowButton = styled.button`
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 45%;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  z-index: 1000;
  background-color: rgba(56, 75, 255, 0.58);

  &.custom-prev {
    left: 0;
  }

  &.custom-next {
    right: 0;
  }

  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const SCarouselWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 0;
  .swiper {
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }

  @media (min-width: 1024px) {
    padding-inline: 2.6rem;
  }
`;

export const SImageWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  z-index: 0;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
