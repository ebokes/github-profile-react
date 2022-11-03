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

export const BackDrop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;
export const MainHeading = styled.h1`
  font-size: 3.5rem;
  display: inline-block;
  margin: 4rem 0;
  color: ${({ theme }) => theme.color.white};
`;
export const SubHeading = styled.div`
  margin-top: 4rem;
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
export const Col1 = styled.div`
  width: 50%;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 100%;
  }
`;
export const Col2 = styled.div`
  width: 50%;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 70%;
  }

  img {
    max-width: 100%;
  }
`;
export const Body = styled.div``;
