import styled from "styled-components";

export const ProfileWrapper = styled.div`
  & > h2 {
    color: ${({ theme }) => theme.color.black};
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  & > p {
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }
`;

export const ProfileContainer = styled.div`
  color: ${({ theme }) => theme.color.black};
  display: flex;
  margin-top: 2rem;
  width: 100%;
  gap: 2rem;
  align-items: flex-start;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 100%;
    flex-direction: column;
  }
`;

export const SideBar = styled.ul`
  width: 10%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 100%;
    display: flex;
  }

  li {
    border: 1px solid ${({ theme }) => theme.color.border};
    padding: 1rem;

    .normal {
      color: ${({ theme }) => theme.color.black};
      font-weight: 600;
    }
    .active {
      color: ${({ theme }) => theme.color.primary};
      font-weight: 600;
    }
  }
`;

export const Output = styled.div`
  width: 95%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 100%;
  }
`;
