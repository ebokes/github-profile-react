import styled from "styled-components";
import { Container, Section } from "../../components/reuseable";
import bg from "../../assets/bg5.jpg";

export const ProfileSection = styled(Section)`
  background: linear-gradient(135deg, #00000093, #000000a9), url("${bg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ProfileContainer = styled(Container)`
  margin: 0 auto;
`;

export const Row1 = styled.div`
  background-color: ${({ theme }) => theme.color.fg};
  padding: 3rem 0;

  & > h1 {
    text-align: center;
    font-size: 3rem;
    font-family: ${({ theme }) => theme.font.font1};
    color: ${({ theme }) => theme.color.primaryText};
  }
`;

export const ProfileCard = styled.div`
  margin: 0 auto 3rem auto;
  display: flex;
  gap: 2rem;
  padding: 3rem 0;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  background-color: ${({ theme }) => theme.color.fg};
  color: ${({ theme }) => theme.color.primaryText};
`;

export const Col1 = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* color: ${({ theme }) => theme.color.main}; */
  font-family: "Montserrat", sans-serif;

  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  img {
    border-radius: 5rem;
    width: 20rem;
  }

  h1 {
    margin: 1rem 0;
  }
`;

export const CardBody = styled.div`
  width: 50%;
  /* color: ${({ theme }) => theme.color.main}; */
  font-family: "Montserrat", sans-serif;

  a {
    display: inline-block;
  }
`;

export const ViewProfile = styled.a`
  background-color: #000;
  color: #f4f4f4;
  padding: 0.5rem 1rem;

  & > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  a {
    font-family: "Montserrat", sans-serif;
    display: inline-block;
    word-wrap: break-word;
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  justify-content: space-between;
  margin-top: 2rem;

  div {
    /* background-color: #f4f4f4; */
    padding: 1rem;
    border-radius: 50%;

    a {
      font-family: "Montserrat", sans-serif;
      color: ${({ theme }) => theme.color.primaryText};
      /* padding: 1rem; */
      /* background-color: #f4f4f4; */
      font-size: 1.4rem;
      /* width: 10rem; */
    }
    p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        &:first-child {
          font-size: 1.7rem;
        }
      }
    }
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
    font-family: "Montserrat", sans-serif;
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
  font-family: "Montserrat", sans-serif;
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
  margin-top: 3rem;
  font-family: "Montserrat", sans-serif;
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
