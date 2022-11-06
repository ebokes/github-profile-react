import styled from "styled-components";
import { Btn, LinkBtn, Section } from "../../components/reuseable";
import bg from "../../assets/bg7.webp";
import { Link } from "react-router-dom";

export const Error404 = styled.section`
  height: 100vh;

  h2 {
    color: #000;
    font-family: ${({ theme }) => theme.font.font2};
  }
`;

export const ErrorBoundarySection = styled(Section)`
  /* background: ${({ theme }) => theme.color.fg}; */
  /* margin: auto; */
  height: 80vh;
  /* width: 100vw; */
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
  /* height: 100vh; */

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
`;

export const IncrementBtn = styled(Btn)`
  padding: 0.7rem 3rem;
  color: ${({ theme }) => theme.color.white};
`;

// export const HomeBtn = styled(Link)`
//   background: linear-gradient(
//     to right,
//     ${({ theme }) => theme.color.linGrad1},
//     ${({ theme }) => theme.color.linGrad2}
//   );
//   color: ${({ theme }) => theme.color.bgGradient};
//   padding: 0.5rem 1rem;
//   border-radius: 0.5rem;
//   border: none;
//   font-weight: 600;
//   font-size: 1.5rem;
//   font-family: "Exo", sans-serif;
//   transition: all 0.5s;
//   text-decoration: none;

//   :active {
//     transform: translateY(3px);
//   }
// `;
