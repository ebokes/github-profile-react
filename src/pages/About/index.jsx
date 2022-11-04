import React from "react";
import { AboutContainer, MainHeading, Row } from "./styles";

const About = () => {
  return (
    <AboutContainer>
      <MainHeading>About Us</MainHeading>
      <Row>
        <p>
          Github Portfolio is a webpage dedicated to showcasing my github
          profile as well as that of other github users.
        </p>
      </Row>
    </AboutContainer>
  );
};

export default About;
