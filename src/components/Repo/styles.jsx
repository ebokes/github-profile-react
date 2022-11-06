import styled from "styled-components";

export const RepoContainer = styled.div`
  font-size: 1.6rem;

  h3 {
    display: inline-block;
  }

  span {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
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

    :active {
      transform: translateY(3px);
    }
  }
`;
