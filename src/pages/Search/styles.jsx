import styled from "styled-components";
import { Section } from "../../components/reuseable";
import bg from "../../assets/bg3.webp";
import { Link } from "react-router-dom";

export const SearchSection = styled(Section)`
  /* background: linear-gradient(
      ${({ theme }) => theme.color.bgGradient},
      ${({ theme }) => theme.color.bgGradient}
    ),
    url("${bg}"); */
  background-color: #3978c6;
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
  width: 90%;
`;

export const Col1 = styled.div`
  /* max-width: 75rem; */
  font-family: "Istok Web", sans-serif;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  /* margin-top: 25%; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  input {
    padding: 1rem 1rem;
    width: 35rem;
    border: none;
    border-radius: 1rem;
    background-color: #ffffff33;
    border-color: transparent;
    color: white;
    outline: none;

    ::placeholder {
      color: #fff;
    }
  }

  button {
    padding: 0.7rem 2rem;
    border-radius: 1rem;
    margin-left: 0.5rem;
    border: none;
    background-color: ${({ theme }) => theme.color.navfooter};
    color: ${({ theme }) => theme.color.main};
    font-weight: 600;
    font-size: 1.6rem;
    font-family: "Exo", sans-serif;
  }
`;

export const SearchResultContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  margin-top: 7rem;
  font-family: "Exo", sans-serif;
`;
export const UserCard = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardContent = styled.div`
  display: flex;
  border: 1px solid #fff;
  width: 35rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.color.white};
  padding: 2rem;
  gap: 2rem;
`;

export const CardAvatar = styled.div`
  img {
    border-radius: 50%;
    width: 10rem;
  }
`;

export const Details = styled.div``;

export const View = styled(Link)`
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.main};
  padding: 0.7rem 2rem;
  border-radius: 1rem;
  border: none;
  font-weight: 600;
  font-size: 1.6rem;
  font-family: "Exo", sans-serif;
  display: inline-block;
  margin-top: 1rem;
`;
export const Row2 = styled.div``;
export const Row3 = styled.div``;
export const UserCardContainer = styled.div``;
