import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ bgcolor }) => bgcolor};
  width: 100%;
  padding: 5rem 0 5rem 0;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
`;
