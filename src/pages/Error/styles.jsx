import styled from "styled-components";
import { Btn, Section } from "../../components/reuseable";
import bg from "../../assets/bg7.webp";

export const Error404 = styled.section`
  height: 100vh;

  h2 {
    color: #000;
    font-family: ${({ theme }) => theme.font.font2};
  }
`;

export const ErrorBoundarySection = styled(Section)`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.font.font2};
  color: ${({ theme }) => theme.color.bg};
`;

export const ErrorTestContainer = styled.div`
  background: linear-gradient(135deg, #000000c4, #000000c0), url(${bg});
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  overflow: hidden;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40rem;
    gap: 3rem;
    font-family: "Exo", sans-serif;
    color: ${({ theme }) => theme.color.primaryText};
    min-height: calc(100vh - 7.85rem);
    margin-bottom: -7.85rem;
    max-width: 120rem;
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    font-size: 5rem;
  }
`;

export const IncrementBtn = styled(Btn)`
  padding: 0.7rem 3rem;
  color: ${({ theme }) => theme.color.white};
`;
