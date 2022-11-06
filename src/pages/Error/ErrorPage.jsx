import React from "react";
import { Container, Section } from "../../components/reuseable";
import { Error404 } from "./styles";

const ErrorPage = () => {
  return (
    <Section>
      <Container>
        <Error404>
          <h2>404... Page not found</h2>
        </Error404>
      </Container>
    </Section>
  );
};

export default ErrorPage;
