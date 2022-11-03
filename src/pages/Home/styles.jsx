import styled from "styled-components";
import { Section } from "../../components/reuseable";
import { Link } from "react-router-dom";
import bg from "../../assets/bg3.webp";

export const HomeSection = styled(Section)`
  background: linear-gradient(
      ${({ theme }) => theme.color.bgGradient},
      ${({ theme }) => theme.color.bgGradient}
    ),
    url("${bg}");
  /* background-color: brown; */
  min-height: 80vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// export const Row = styled.div``;

export const Col1 = styled.div`
  /* max-width: 75rem; */
  font-family: "Istok Web", sans-serif;
  color: ${({ theme }) => theme.color.white};

  h1 {
    font-size: 3rem;
    font-weight: 700;
    font-family: "Rajdhani", sans-serif;
    line-height: 1;
    color: ${({ theme }) => theme.color.white};

    @media screen and (max-width: ${({ theme }) => theme.screens.xsm}) {
      font-size: 5rem;
    }
  }
`;

export const Col2 = styled.div`
  margin-top: 4rem;
  column-gap: 1rem;
  width: 30rem;
  display: flex;
  justify-content: center;
`;
export const SearchBtn = styled(Link)`
  background-color: ${({ theme }) => theme.color.navfooter};
  color: ${({ theme }) => theme.color.main};
  padding: 0.7rem 2rem;
  border-radius: 1rem;
  border: none;
  font-weight: 600;
  font-size: 1.6rem;
  font-family: "Exo", sans-serif;
`;
export const ProfileBtn = styled(SearchBtn)``;
