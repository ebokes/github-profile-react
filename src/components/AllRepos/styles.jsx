import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { LinkBtn, Section } from "../reuseable";

export const AllReposSection = styled(Section)`
  min-height: calc(100vh - 7.85rem);
  margin-bottom: -7.85rem;
`;
export const Row = styled.div`
  font-family: ${({ theme }) => theme.font.font3};
  color: ${({ theme }) => theme.color.primaryText};
  margin-top: 3rem;
  padding: 0 7rem;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    padding: 0;
  }
`;

export const Col = styled.div`
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

export const RepoItem = styled.div`
  color: ${({ theme }) => theme.color.primaryText};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s;
  position: relative;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.color.fg};
  border: 1px solid #333;
  padding: 1.5rem 1rem;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    padding: 1.5rem 1rem;
  }
`;

export const RepoLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.primaryText};
`;
export const RepoList = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const DetailsBtn = styled(LinkBtn)`
  @media screen and (max-width: ${({ theme }) => theme.screens.sm}) {
    display: none;
  }
`;

export const OutletContainer = styled.div`
  align-items: center;
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
