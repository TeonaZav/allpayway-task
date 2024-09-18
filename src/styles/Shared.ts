import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-inline: 1.6rem;

  @media (min-width: 1440px) {
    padding-inline: 0;
    max-width: 1250px;
  }
`;
