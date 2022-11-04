import styled from "styled-components";
import { LinkBtn, Section } from "../../components/reuseable";
import bg from "../../assets/bg5.jpg";

export const HomeSection = styled(Section)`
  background: linear-gradient(135deg, #00000041, #0000004f), url("${bg}");
  /* min-height: 80vh; */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
  width: 100%;
  min-height: calc(100vh - 7.85rem);
  /* margin-bottom: -7.85rem; */
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
  font-family: ${({ theme }) => theme.font.font1};
  color: ${({ theme }) => theme.color.white};

  h1 {
    font-size: 3rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.font.font2};
    line-height: 1;
    color: ${({ theme }) => theme.color.white};

    @media screen and (max-width: ${({ theme }) => theme.screens.xsm}) {
      text-align: center;
    }
  }
`;

export const Col2 = styled.div`
  margin-top: 4rem;
  column-gap: 1rem;
  width: 30rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.screens.xsm}) {
    flex-direction: column;
    width: auto;
    row-gap: 2rem;
  }
`;
export const SearchBtn = styled(LinkBtn)``;
export const ProfileBtn = styled(LinkBtn)``;
