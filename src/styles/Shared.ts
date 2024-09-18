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

export const Button = styled.button<{ $gap?: string }>`
  width: 15.2rem;
  height: 4.8rem;
  flex-shrink: 0;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: capitalize;
  background-color: var(--clr-btn-primary);
  color: var(--clr-white);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $gap }) => $gap || "0.9rem"};
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(0.99);
  }
  @media (min-width: 1440px) {
    width: 18rem;
  }
`;

export const SectionHeading = styled.h2`
  color: var(--clr-text-primary);
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin-bottom: 2.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1440px) {
    font-size: 4rem;
    margin-bottom: 3.8rem;
  }
`;

export const Section = styled.section`
  width: 100%;
  margin-bottom: 4.9rem;
  @media (min-width: 1440px) {
    margin-bottom: 8.4rem;
  }
`;

export const Text = styled.p`
  color: var(--clr-text-primary);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: normal;
  text-align: justify;
  text-transform: capitalize;

  @media (min-width: 1440px) {
    font-size: 2rem;
    padding-inline: 2.65rem;
  }
`;
