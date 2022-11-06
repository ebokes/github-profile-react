import styled from "styled-components";
import { Btn } from "../../components/reuseable";
import bg from "../../assets/bg7.webp";

export const Error = styled.section`
  height: 100vh;

  /* margin-top: 30rem; */

  h2 {
    color: #000;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  }
`;
export const ErrorBoundarySection = styled.section`
  /* margin: auto; */
  height: 100vh;
  /* width: 100vw; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
`;

export const ErrorTestContainer = styled.div`
  background: linear-gradient(135deg, #000000c4, #000000c0), url("${bg}");
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
    color: ${({ theme }) => theme.color.white};
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

  button {
    /* width: 5rem; */
    /* padding: 1rem 4rem; */
    /* color: ${({ theme }) => theme.color.white}; */
    /* font-size: 2rem; */
    /* border-radius: 1rem; */
    /* border: 1px solid ${({ theme }) => theme.color.white}; */
  }
`;

export const IncrementBtn = styled(Btn)`
  padding: 0.7rem 3rem;
  color: ${({ theme }) => theme.color.white};
`;
