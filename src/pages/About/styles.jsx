import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  h1 {
    font-size: 4rem;
  }
  h3 {
    color: ${({ theme }) => theme.color.primary};
  }
  h2 {
    font-size: 2.7rem;
  }
`;

export const MainHeading = styled.h1`
  font-size: 3.5rem;
  display: inline-block;
  margin: 4rem 0;
  color: ${({ theme }) => theme.color.black};
`;

export const Row = styled.div`
  display: flex;
  width: 95%;
  gap: 2rem;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column;
  }
`;
