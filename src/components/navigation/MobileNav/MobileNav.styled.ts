import styled from "styled-components";
import { DrawerContent } from "@chakra-ui/react";

export const SMobileNav = styled.nav`
  display: block;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const SBurgerButton = styled.button.attrs({
  type: "button",
})`
  width: 22px;
  height: 16.343px;
  flex-shrink: 0;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  z-index: 10000;
  position: relative;
`;

export const SDrawerContent = styled(DrawerContent)`
  && {
    background-color: hsla(244, 100%, 15%, 0.8);
    color: white;
    height: 100vh;
    width: 75% !important;
    padding: 8.5rem 3.7rem;

    .chakra-drawer__close-btn {
      color: white;
      font-size: 1.5rem;
      position: absolute;
      top: 10px;
      right: 10px;
    }
    @media (min-width: 1440px) {
      display: none;
    }
  }
`;
