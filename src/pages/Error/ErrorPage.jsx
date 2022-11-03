import React from "react";
import { Container, Section } from "../../components/reuseable";
import { Error } from "./styles";

const ErrorPage = () => {
  return (
    <Section>
      <Container>
        <Error>
          <h2>404... Page not found</h2>
        </Error>
      </Container>
    </Section>
  );
};

export default ErrorPage;
