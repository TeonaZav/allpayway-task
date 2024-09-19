import styled from "styled-components";
import { Button } from "../../styles/Shared";

export const SProjectContentWrapper = styled.div`
  margin-bottom: 9rem;
  display: flex;
  flex-direction: column;
  gap: 6.6rem;

  ${Button} {
    margin: 0 auto;
    display: none;
  }

  @media (min-width: 1024px) {
    margin-bottom: 16.1rem;

    ${Button} {
      display: flex;
    }
  }
  @media (min-width: 1440px) {
    margin-bottom: 16.1rem;
  }
`;
