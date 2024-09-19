import styled from "styled-components";

export const STeamCard = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  aspect-ratio: 282/262;
  cursor: pointer;
`;

export const STeamImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SCardContent = styled.div<{ $isHovered: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(45, 70, 198, 0.5);
  height: 8.1rem;
  backdrop-filter: blur(calc(var(--sds-size-depth-200) / 2));
  color: white;
  padding: 2rem 1.6rem;
  transform: ${(props) =>
    props.$isHovered ? "translateY(0)" : "translateY(100%)"};
  transition: transform 0.3s ease-in-out;
  text-align: left;
  opacity: ${(props) => (props.$isHovered ? 1 : 0)};

  h3 {
    color: #fbfbfb;

    font-size: 1.8rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  p {
    color: #fbfbfb;
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: capitalize;
  }

  @media (min-width: 1440px) {
    height: 7.2rem;
    padding: 1.8rem 1.4rem;
  }
`;
