import { Link } from "react-router-dom";
import footerBgMobile from "./../../assets/images/footer-bg-mobile.png";
import footerBgDesktop from "./../../assets/images/footer-bg-desktop.png";

import styled from "styled-components";
import { Container } from "../../styles/Shared";

export const SFooter = styled.footer`
  width: 100%;
  height: 33.1rem;
  padding-top: 5.2rem;
  padding-bottom: 5.5rem;
  background: url(${footerBgMobile}) lightgray 50% / cover no-repeat;

  ${Container} {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6.2rem;
    padding-left: 3.8rem;
    padding-right: 3.6rem;
  }
  @media (min-width: 1200px) {
    height: 16rem;
    background: url(${footerBgDesktop}) lightgray 50% / cover no-repeat;
    ${Container} {
      flex-direction: row;
      justify-content: space-between;
      padding-inline: 8.35rem;
    }
  }
`;

export const SFooterCt2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.2rem;

  @media (min-width: 1200px) {
    width: 57%;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
`;
export const STermsLinkCt = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.1rem;

  @media (min-width: 1200px) {
    gap: 0.6rem;
  }
`;

export const SLink = styled(Link)<{ to: string }>`
  color: var(--clr-text-tertiary);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;

  @media (min-width: 1440px) {
    font-size: 1.4rem;
  }
`;

export const SCopyright = styled.p`
  color: var(--clr-text-tertiary);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 1440px) {
    font-size: 1.4rem;
  }
`;

export const SSocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 26.5rem;
  gap: 1rem;
  @media (min-width: 1200px) {
    width: unset;
    gap: 3rem;
  }
`;

export const SSocialLink = styled.a`
  color: #fafafa;
  width: 1.6rem;
  transition: all 0.4s ease-in-out;

  @media (min-width: 1200px) {
    color: #ffffff;
    svg path {
      fill-opacity: 1;
    }
  }
`;
