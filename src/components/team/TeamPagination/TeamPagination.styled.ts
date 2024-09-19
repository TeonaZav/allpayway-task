import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const STeamListWrapper = styled.div`
  margin-bottom: 9.4rem;
  margin-top: 3.9rem;

  @media (min-width: 1440px) {
    margin-bottom: 12.1rem;
    padding-inline: 2.65rem;
  }
`;

export const SPaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 7rem;
`;

export const SPageButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  width: 3rem;
  height: 4.5rem;
  color: #fff;
  background-color: transparent;

  font-weight: 700;
  margin-inline: 0;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const SPagination = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  list-style-type: none;

  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;

    cursor: pointer;
    font-size: 1.8rem;

    font-weight: 700;
    &.active {
      background-color: #384bff;
      padding: 0.8rem 1rem;
      border-radius: 0.8rem;
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  & li a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

export const STeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;
  margin: 2.4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const SSubheading = styled.h3`
  color: #28c840;
  font-size: var(--fs-medium);
`;
