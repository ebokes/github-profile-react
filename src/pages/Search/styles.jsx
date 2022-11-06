import styled from "styled-components";
import { AnchorBtn, Section } from "../../components/reuseable";
import bg from "../../assets/bg10.webp";

export const SearchSection = styled(Section)`
  background: linear-gradient(135deg, #00000074, #00000074), url("${bg}");
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 7.85rem);
  margin-bottom: -7.85rem;
`;

export const SearchContainer = styled.div`
  margin-bottom: 6rem;
`;
export const SearchBar = styled.div`
  font-family: "Istok Web", sans-serif;
  color: ${({ theme }) => theme.color.white};
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 500;
    font-family: "Rajdhani", sans-serif;
    line-height: 1;
    color: ${({ theme }) => theme.color.primaryText};

    @media screen and (max-width: ${({ theme }) => theme.screens.xsm}) {
      font-size: 2.5rem;
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
    border-radius: 0.5rem;
    background-color: #ffffff33;
    border-color: transparent;
    color: white;
    outline: none;

    ::placeholder {
      color: #fff;
    }
  }
`;

export const SearchResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 7rem;
  font-family: "Exo", sans-serif;
  color: ${({ theme }) => theme.color.white};
  flex-direction: column;
  /* margin: 0 auto; */
`;

export const SearchList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
  justify-content: center;
  margin-top: 4rem;
`;
export const UserCard = styled.div`
  display: flex;
`;

export const CardContent = styled.div`
  display: flex;
  /* border: 1px solid #fff; */
  width: 35rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.color.primaryText};
  padding: 2rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.color.fg};
  justify-content: center;
`;

export const CardAvatar = styled.div`
  img {
    border-radius: 50%;
    width: 10rem;
  }
`;

export const Details = styled.div``;

export const View = styled(AnchorBtn)`
  margin-top: 2rem;
  display: flex;
  gap: 0.3rem;
  align-items: center;
  padding: 0.7rem 1rem;
  width: 13rem;
`;

export const UserCardContainer = styled.div``;
