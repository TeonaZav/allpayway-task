import styled from "styled-components";

export const SIconWrapper = styled.div`
  font-size: 48px;
  margin-bottom: 1rem;
  width: 7.4rem;
  height: 7.4rem;
  border-radius: 0.6rem;
  background-color: var(--tag-bg-web);
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const SCard = styled.article`
  && {
    height: 19rem;
    border-radius: 1rem;
    background-color: var(--clr-bg-card);
    padding: 1.8rem;
    overflow: hidden;

    &:nth-child(3n + 1) ${SIconWrapper} {
      background-color: var(--tag-bg-web);
    }

    &:nth-child(3n + 2) ${SIconWrapper} {
      background-color: var(--tab-bg-mobile);
    }

    &:nth-child(3n + 3) ${SIconWrapper} {
      background-color: var(--tag-bg-design);
    }
  }
`;

export const SCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SCardBody = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 2.2rem;
    color: var(--clr-text-secondary);
    font-weight: 600;
    line-height: normal;
  }
  p {
    font-size: var(--fs-xs);
    font-weight: 600;
    margin-bottom: 0.9rem;
  }
`;

export const SCardNumber = styled.span`
  color: #3730a3;
  text-align: right;
  font-size: 6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 0.1;
`;
