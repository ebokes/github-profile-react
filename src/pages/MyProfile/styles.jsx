import styled from "styled-components";
import { AnchorBtn, Container, Section } from "../../components/reuseable";
import bg from "../../assets/bg5.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ProfileSection = styled(Section)`
  background: linear-gradient(135deg, #00000093, #000000a9), url("${bg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: calc(100vh - 7.85rem);
  margin-bottom: -7.85rem;
`;

export const ProfileContainer = styled(Container)`
  margin: 0 auto;
`;

export const Row1 = styled(motion.div)`
  background-color: ${({ theme }) => theme.color.fg};
  padding: 3rem 0;
  border: 1px solid #333;

  & > h1 {
    text-align: center;
    font-size: 3rem;
    font-family: ${({ theme }) => theme.font.font1};
    color: ${({ theme }) => theme.color.tertiaryText};
    margin-bottom: 2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    margin-bottom: 5rem;
  }
`;

export const ProfileCard = styled.div`
  display: flex;
  width: 90%;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column;
  }
`;

export const Col1 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  div {
    width: 70%;
    display: flex;
    justify-content: center;

    & > img {
      max-width: 100%;
      border-radius: 50%;
      height: auto;
      transition: all 1s ease-out;
    }
    @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
      width: 80%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Col2 = styled.div`
  width: 50%;
  font-family: ${({ theme }) => theme.font.font3};
  color: ${({ theme }) => theme.color.primaryText};

  & > span {
    margin-bottom: 2rem;
    display: flex;
    gap: 0.3rem;

    & > h2 {
      display: flex;
      flex-direction: column;
      & > span {
        &:first-child {
          margin-right: 1rem;
          margin-bottom: 2rem;
        }
        &:last-child {
          font-size: 1.7rem;
          font-weight: 500;
        }
      }
    }

    &:first-child {
      gap: 1rem;
      align-items: center;
    }

    & > a {
      color: ${({ theme }) => theme.color.primaryText};

      &:hover {
        color: ${({ theme }) => theme.color.secondaryText};
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 100%;
  }
`;

export const ProfileBtnGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0 0 0;
  gap: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.screens.xsm}) {
    flex-direction: column;
  }
`;

export const ViewProfile = styled.a`
  background-color: #000;
  color: #f4f4f4;
  padding: 0.5rem 1rem;
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

  & > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const RepoToggleBtn = styled(AnchorBtn)``;

export const Stats = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: ${({ theme }) => theme.screens.xsm}) {
    justify-content: center;
  }

  & > div {
    border: 1px solid ${({ theme }) => theme.color.secondaryText};
    border-radius: 0.5rem;
    display: inline-flex;
    justify-content: center;
    width: 11rem;
    color: ${({ theme }) => theme.color.secondaryText};
    display: flex;
    gap: 0.4rem;
    align-items: center;
    padding: 0.5rem;
  }
`;

export const Left = styled.div`
  width: 32%;
  border: 1px solid #333;
  background-color: ${({ theme }) => theme.color.fg};
  & > div {
    h2 {
      padding: 1rem;
      color: ${({ theme }) => theme.color.tertiaryText};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 100%;
  }
`;

export const RepoList = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const RepoItem = styled.div`
  .normal {
    color: ${({ theme }) => theme.color.primaryText};
    display: flex;
    transition: all 0.4s;
    position: relative;
    transition: all 0.2s ease-in-out;
    font-family: ${({ theme }) => theme.color.primaryText};
    font-weight: 600;
    font-size: 1.8rem;
    background-color: ${({ theme }) => theme.color.fg};
    border: 1px solid #333;
    padding: 1.5rem 1rem;
    width: 100%;

    @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
      width: fit-content;
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
      margin-bottom: 1rem;
    }

    :hover {
      color: ${({ theme }) => theme.color.secondaryText};

      @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
        color: ${({ theme }) => theme.color.bgGradient};
      }
    }
  }

  .active {
    color: ${({ theme }) => theme.color.secondaryText};
    display: flex;
    transition: all 0.4s;
    position: relative;
    transition: all 0.5s ease-in-out;
    font-family: ${({ theme }) => theme.color.primaryText};
    font-weight: 600;
    font-size: 1.8rem;
    background: linear-gradient(90deg, #141414 5.67%, #1c1c1c 100%);
    border: 1px solid #333;
    padding: 1.5rem 1rem;
    width: 100%;

    @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
      width: fit-content;
      padding: 0.7rem 2rem;
      border-radius: 0.5rem;
      border: none;
      font-weight: 600;
      font-size: 1.6rem;
      font-family: "Exo", sans-serif;
      transition: all 0.5s;
      margin-bottom: 1rem;
    }
  }
`;

export const View = styled(Link)`
  padding: 0.3rem;
  margin-left: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.color.secondaryText}; ;
`;

export const Row2 = styled.div`
  font-family: ${({ theme }) => theme.font.font3};
  color: ${({ theme }) => theme.color.primaryText};
  margin-top: 3rem;
`;

export const OutletContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column;
  }
`;

export const Right = styled(motion.div)`
  width: 68%;
  border: 1px solid #333;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.fg};

  @media screen and (max-width: 860px) {
    width: 100%;
  }
`;

export const Paginate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin: 3rem 0;
  font-family: ${({ theme }) => theme.font.font3};

  & > div {
    color: ${({ theme }) => theme.color.primaryText};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1rem auto 3rem auto;

  button {
    width: 4rem;
    font-weight: 600;
    padding: 0.5rem 0;
    text-align: center;
    border-radius: 0.4rem;
    cursor: pointer;
  }
`;

export const Prev = styled.button`
  background-color: ${({ theme }) => theme.color.secondaryText};
  border: none;
`;

export const Pagebtn = styled.button`
  background-color: ${({ theme }) => theme.color.fg};
  color: ${({ theme }) => theme.color.linGrad2};
  border: 1px solid ${({ theme }) => theme.color.linGrad2};
`;

export const Next = styled.button`
  background-color: ${({ theme }) => theme.color.secondaryText};
  border: none;
`;
