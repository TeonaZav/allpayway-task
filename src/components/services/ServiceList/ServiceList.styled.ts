import styled from "styled-components";
import { Section, Button } from "../../../styles/Shared";

export const SServicListWrapper = styled(Section)`
  display: flex;
  flex-direction: column;

  ${Button} {
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    padding-inline: 2.65rem;
  }
`;

export const SGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.8rem;
  margin-bottom: 4.6rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    margin-bottom: 5.4rem;
  }
`;
