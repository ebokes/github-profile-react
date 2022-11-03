import React from "react";
import {
  AboutContainer,
  BackDrop,
  Body,
  Col1,
  Col2,
  MainHeading,
  Row,
  SubHeading,
} from "./styles";

const About = () => {
  return (
    <AboutContainer>
      <BackDrop>
        <MainHeading>About Us</MainHeading>
      </BackDrop>
      <Row>
        <Col2>{/* <img src={abc} alt="" /> */}</Col2>
        <Col1>
          <SubHeading>
            <h3>// WE ARE BESOFT</h3>
            <h1>We Are Trusted</h1>
            <h2>36+ Countries Worldwide</h2>
          </SubHeading>
          <Body>
            <p>
              Appropriately morph premium functionalities whereas user-centric
              relatio Efficiently productivate resource sucking communities
              after team building web-readiness. Seamlessly plagiarize
              open-source.
            </p>
            <p>
              Great team of more than 450 more skilled engineers team in world.
            </p>
            <p>We help you to elevate motion have an hour the market.</p>
          </Body>
        </Col1>
      </Row>
    </AboutContainer>
  );
};

export default About;
