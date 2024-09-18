import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavLinkProps } from "react-router-dom";

export const SNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5.3rem;

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    gap: 3.8rem;
  }
`;

export const SNavLink = styled(NavLink)<NavLinkProps>`
  font-family: inherit;
  font-size: var(--fs-medium);
  color: var(--clr-links);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.4s ease-in-out;

  &.active {
    color: var(--clr-links-active);
  }
`;
