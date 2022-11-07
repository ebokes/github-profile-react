import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 8.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.fg};
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.secondaryText};

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    height: 6.5rem;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 95%;
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-top: 1px solid ${({ theme }) => theme.color.primaryText};
  border-bottom: 1px solid ${({ theme }) => theme.color.primaryText};
  border-radius: 0.6rem;
  height: 3.5rem;
  padding: 0 0.5rem;

  h2 {
    color: ${({ theme }) => theme.color.primaryText};
    font-family: "Exo", sans-serif;
    font-weight: 600;
  }
`;

export const Menu = styled.ul`
  display: none;
  z-index: 20;

  .normal {
    color: ${({ theme }) => theme.color.primaryText};
    display: flex;
    transition: all 0.4s;
    position: relative;
    padding-bottom: 0.3rem;
    transition: all 0.5s ease-in-out;
    font-family: "Exo", sans-serif;
    font-weight: 600;
    font-size: 1.8rem;

    :hover {
      color: ${({ theme }) => theme.color.secondaryText};

      @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
        color: ${({ theme }) => theme.color.primaryText};
      }
    }

    &::before {
      content: "";
      width: 100%;
      height: 0.2rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.secondaryText};
      position: absolute;
      bottom: 0;
      left: 0;
      transition: transform 250ms ease-in;
      transform: scaleX(0);
    }

    &:hover::before {
      transform: scaleX(1);
      background-color: ${({ theme }) => theme.color.SecondaryText};

      @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
        transform: scaleX(0);
        color: transparent;
      }
    }
  }

  .active {
    color: ${({ theme }) => theme.color.secondaryText};
    display: flex;
    transition: all 0.4s;
    position: relative;
    padding-bottom: 0.3rem;
    transition: all 0.5s ease-in-out;
    font-family: "Exo", sans-serif;
    font-weight: 600;
    font-size: 1.8rem;

    :hover {
      color: ${({ theme }) => theme.color.secondaryText};

      @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
      }
    }

    &::before {
      content: "";
      width: 100%;
      border-radius: 50%;
      height: 0.2rem;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: transform 250ms ease-in;
      transform: scaleX(1);
      background-color: ${({ theme }) => theme.color.secondaryText};

      @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
        transform: scaleX(0);
        color: ${({ theme }) => theme.color.main};
      }
    }
  }

  /* mobile */
  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    top: 6.5rem;
    right: 0;
    background-color: ${({ theme }) => theme.color.fg};
    padding-left: 2rem;
    min-height: calc(100vh - 7.85rem);
    margin-bottom: -7.85rem;
    animation: slideOut 0.5s ease-in;
    margin-right: 0;
    opacity: 0.9;

    li {
      padding: 0;
      width: 22rem;
      line-height: 2.5rem;
      padding: 1rem;

      @keyframes slideOut {
        0% {
          width: 0rem;
          opacity: 0;
        }
        100% {
          width: 19rem;
          opacity: 1;
        }
      }
    }
  }

  /* Desktop */
  ${({ isOpen }) => isOpen} {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: flex-end;

    @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
      display: none;
    }

    li {
      &:not(:last-child) {
        padding-right: 2.5rem;
      }
    }
  }
`;

export const HamburgerStyle = styled.span`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    display: inline-block;
    margin-right: -1rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    padding-right: 2%;
    cursor: auto;
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.xsm}) {
    margin-right: 0rem;
  }
`;
