import styled from "styled-components";
import { Container } from "../../styles/Shared";

export const SHeader = styled.header`
  width: 100%;
  padding-top: 7rem;

  ${Container} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.6rem;
  }

  @media (min-width: 360px) {
    ${Container} {
      padding-inline: 3.6rem;
    }
  }

  @media (min-width: 1440px) {
    padding-top: 8.57rem;
    ${Container} {
      padding-inline: 2.65rem;
    }
  }
`;

export const SLogo = styled.figure`
  flex-shrink: 1;
  height: auto;

  svg {
    object-fit: cover;
  }

  @media (min-width: 360px) {
    width: 16.8rem;
  }
  @media (min-width: 1440px) {
    width: 19.2rem;
  }
`;

export const SDesktopNav = styled.nav`
  display: none;

  @media (min-width: 1440px) {
    display: block;
  }
`;
