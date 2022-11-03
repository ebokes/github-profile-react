import styled from "styled-components";
import { Container, Section } from "../../components/reuseable";

export const ProfileSection = styled(Section)``;

export const ProfileContainer = styled(Container)`
  margin: 0 auto;
  & > h1 {
    text-align: center;
    font-family: "Exo", sans-serif;
    margin-bottom: 2rem;
  }
`;

export const ProfileCard = styled.div`
  margin: 0 auto 5rem auto;
  display: flex;
  gap: 2rem;
  padding: 3rem 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Col1 = styled.div`
  width: 50%;
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
  width: 60%;
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
  max-width: 40rem;
  justify-content: space-between;
  margin-top: 2rem;

  a {
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.color.main};
    padding: 0.5rem 1rem;
    background-color: #f4f4f4;
    color: #000;
    font-size: 1.4rem;
  }
`;

export const RepoItem = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  width: 30rem;

  a {
    color: ${({ theme }) => theme.color.main};
    font-family: "Montserrat", sans-serif;
  }
`;

export const OutletContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;
export const RepoList = styled.div`
  width: 30%;
`;
export const RepoOutlet = styled.div`
  width: 70%;
  border: 1px solid #ccc;
  padding: 2rem;
`;
