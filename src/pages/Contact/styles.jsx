import styled from "styled-components";
import { Btn, Section } from "../../components/reuseable";
import map from "../../assets/map-bg.png";

export const ContactSection = styled(Section)`
  background: linear-gradient(135deg, #0000005f, #0000005f), url(${map});
  min-height: calc(100vh - 7.85rem);
  margin-bottom: -7.85rem;
`;

export const ContactWrapper = styled.div`
  margin: 4rem 0;
`;

export const Heading = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.color.white};
  font-size: 3rem;
  text-align: center;
  font-family: ${({ theme }) => theme.font.font1};

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    font-size: 2rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 3rem;
  column-gap: 3rem;

  input {
    width: 47%;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #ffffff33;
    border-color: transparent;
    font-size: 1.6rem;
    outline: none;
    color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.font.font1};

    @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
      width: 100%;
    }

    &::placeholder {
      color: #fff;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
`;
export const MessageStyle = styled.div`
  textarea {
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #ffffff33;
    border-color: transparent;
    margin-top: 3rem;
    font-size: 1.6rem;
    outline: none;
    color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.font.font1};

    &::placeholder {
      color: #fff;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
`;

export const SubmitBtn = styled(Btn)`
  border-radius: 0.2rem;
  margin-top: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.font1};
`;
