import styled from "styled-components";

export const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const SMain = styled.main`
  flex: 1;
  padding-top: 12.58rem;
`;

export const SPathname = styled.h2`
  color: var(--clr-links-active);
  font-size: var(--fs-medium);
  margin-bottom: 3.9rem;

  @media (min-width: 1440px) {
    margin-bottom: 5.5rem;
  }
`;
