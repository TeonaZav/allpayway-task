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
  svg {
    fill: rgba(56, 75, 255, 0.58);
  }
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

  .swiper {
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }

  margin-bottom: 6.6rem;

  @media (min-width: 1024px) {
    padding-inline: 2.65rem;
  }
`;

export const SImageWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
