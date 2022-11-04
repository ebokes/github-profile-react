import styled from "styled-components";
import { Btn, Container, Section } from "../../components/reuseable";
import bg from "../../assets/bg5.jpg";

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

export const Row1 = styled.div`
  background-color: ${({ theme }) => theme.color.fg};
  padding: 3rem 0;
  border: 1px solid #333;

  & > h1 {
    text-align: center;
    font-size: 3rem;
    font-family: ${({ theme }) => theme.font.font1};
    color: ${({ theme }) => theme.color.primaryText};
  }
`;

export const ProfileCard = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.color.fg};
  color: ${({ theme }) => theme.color.primaryText};
  width: 80rem;
  height: 28rem;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ColGroup = styled.div`
  display: flex;
  gap: 3rem;
  width: 90%;
  align-items: flex-start;
  height: 100%;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
  }
`;

export const Col1 = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* color: ${({ theme }) => theme.color.main}; */
  font-family: ${({ theme }) => theme.font.font3};
  gap: 3rem;

  img {
    /* max-width: 100%; */
    border-radius: 2rem;
    width: 25rem;
  }
`;

export const Col2 = styled.div`
  width: 60%;
  font-family: ${({ theme }) => theme.font.font3};
  gap: 1rem;

  & > div {
    &:first-child {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  a {
    display: inline-block;
  }

  & > span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-top: 1rem;

    & > a {
      color: ${({ theme }) => theme.color.primaryText};
    }
  }

  h1 {
    margin: 1rem 0;
  }

  p {
    margin: 1rem 0;
  }
`;

export const ProfileBtnGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0 0 0;
  gap: 2rem;
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

  :active {
    transform: translateY(3px);
  }

  & > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const RepoToggleBtn = styled(Btn)``;

export const Col3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  justify-content: space-between;
  margin-top: 2rem;
  text-align: center;

  div {
    /* padding: 1rem; */
    /* background: linear-gradient(135deg, #f5d061, #e48f04); */
    /* padding: 0.5rem 1rem; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.3rem;

    a {
      font-family: ${({ theme }) => theme.font.font3};
      color: ${({ theme }) => theme.color.secondaryText};
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
    }
    p {
      align-items: center;

      font-size: 1.5rem;
      width: 10rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: row;
  }
`;

export const RepoList = styled.div`
  width: 30%;

  h2 {
    background-color: ${({ theme }) => theme.color.fg};
    padding: 2rem 1rem;
  }
`;

export const RepoItem = styled.div`
  padding: 1.5rem 1rem;
  border: 1px solid #333;
  min-width: 30rem;
  background-color: ${({ theme }) => theme.color.fg};

  a {
    color: ${({ theme }) => theme.color.primaryText};
    font-family: ${({ theme }) => theme.font.font3};
  }

  .normal {
    color: ${({ theme }) => theme.color.primaryText};
    display: flex;
    transition: all 0.4s;
    position: relative;
    padding-bottom: 0.3rem;
    transition: all 0.2s ease-in-out;
    font-family: ${({ theme }) => theme.color.primaryText};
    font-weight: 600;
    font-size: 1.8rem;

    :hover {
      color: ${({ theme }) => theme.color.secondaryText};

      @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
        color: ${({ theme }) => theme.color.primaryText};
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
    font-family: ${({ theme }) => theme.color.primaryText};
    font-weight: 600;
    font-size: 1.8rem;
  }
`;

export const Row2 = styled.div`
  font-family: ${({ theme }) => theme.font.font3};
  color: ${({ theme }) => theme.color.primaryText};
  /* background-color: ${({ theme }) => theme.color.fg}; 
  */
  margin-top: 3rem;
`;
export const OutletContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

export const RepoOutlet = styled.div`
  width: 70%;
  border: 1px solid #333;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.fg};
`;

// export const Paginate = styled.div`
//   `;

export const Paginate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin: 3rem 0;
  font-family: ${({ theme }) => theme.font.font3};
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
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
`;

export const Next = styled.button`
  background-color: ${({ theme }) => theme.color.secondaryText};
  border: none;
`;
