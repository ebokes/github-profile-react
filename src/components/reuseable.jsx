import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ bgcolor }) => bgcolor};
  width: 100%;
  padding: 5rem 0 5rem 0;
  overflow-x: hidden;
`;

export const Container = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 95%;
  }
`;
export const LinkBtn = styled(NavLink)`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.linGrad1},
    ${({ theme }) => theme.color.linGrad2}
  );
  color: ${({ theme }) => theme.color.bgGradient};
  padding: 0.7rem 2rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
  font-size: 1.6rem;
  font-family: "Exo", sans-serif;
  transition: all 0.5s;

  :hover {
    transform: scale(1.07);
  }

  :active {
    transform: translateY(3px);
  }
`;

export const AnchorBtn = styled.a`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.linGrad1},
    ${({ theme }) => theme.color.linGrad2}
  );
  color: ${({ theme }) => theme.color.bgGradient};
  padding: 0.7rem 2rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
  font-size: 1.6rem;
  font-family: "Exo", sans-serif;
  transition: all 0.5s;

  :hover {
    transform: scale(1.07);
  }

  :active {
    transform: translateY(3px);
  }
`;

export const Btn = styled.button`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.linGrad1},
    ${({ theme }) => theme.color.linGrad2}
  );
  color: ${({ theme }) => theme.color.bgGradient};
  padding: 0.7rem 2rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
  font-size: 1.6rem;
  font-family: "Exo", sans-serif;
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    transform: scale(1.07);
  }

  :active {
    transform: translateY(3px);
  }
`;
