import styled from "styled-components";
import { Button } from "../../styles/Shared";

export const SHompageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 2rem;

  ${Button} {
    width: 100%;
    height: 4.8rem;
    max-width: 24rem;
  }

  figure {
    display: flex;
    justify-content: center;
    img {
      flex-shrink: 0;
      width: 16.8rem;
      height: auto;
    }
  }

  @media (min-width: 768px) {
    gap: 3rem;
    figure {
      img {
        width: 24rem;
      }
    }
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 5rem;
    align-items: flex-start;

    figure {
      img {
        width: 32rem;
      }
    }
  }
`;

export const SHeading = styled.h1`
  color: var(--clr-text-primary);
  max-width: 100%;
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
  text-transform: capitalize;

  margin-bottom: 2.4rem;

  @media (min-width: 768px) {
    font-size: 4rem;
    width: 100%;
  }

  @media (min-width: 1280px) {
    width: 60%;
  }

  @media (min-width: 1440px) {
    font-size: 4rem;
    margin-bottom: 3.8rem;
  }
`;

export const SButtonStart = styled(Button)`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
  }
`;


export const SButtonStartMobile = styled(Button)`
  @media (min-width: 1440px) {
    display: none;
  }
`;
