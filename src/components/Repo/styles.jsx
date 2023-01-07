import { Link } from "react-router-dom";
import styled from "styled-components";
import { Section } from "../reuseable";

export const RepoSection = styled(Section)`
  min-height: calc(100vh - 7.85rem);
  margin-bottom: -7.85rem;
`;

export const BackBtn = styled(Link)``;
export const RepoContainer = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.primaryText};
  background-color: ${({ theme }) => theme.color.fg};
  padding: 4rem;
  max-width: 50rem;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.font.font3};

  @media screen and (max-width: ${({ theme }) => theme.screens.xsm}) {
    padding: 4rem 1rem;
  }

  h2 {
    text-align: center;
    border-bottom: 2px solid ${({ theme }) => theme.color.secondaryText};
    margin: 2rem auto;
    /* display: inline-block; */
    width: fit-content;
  }

  h3 {
    display: inline-block;
  }

  span {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;

    &:last-child {
      gap: 2rem;
    }
  }

  a {
    display: inline-block;
    margin-top: 1rem;
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
  }
`;
