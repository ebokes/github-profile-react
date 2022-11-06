import React from "react";
import { Helmet } from "react-helmet-async";
import { Container } from "../../components/reuseable";
import {
  ContactSection,
  ContactWrapper,
  Heading,
  InputWrapper,
  MessageStyle,
  SubmitBtn,
} from "./styles";

const Contact = () => {
  return (
    <ContactSection>
      <Container>
        <Helmet>
          <title>Contact me</title>
          <meta name="description" content="Feel free to reach out to me" />
          <link rel="canonical" href="/contact" />
        </Helmet>
        <ContactWrapper>
          <Heading>
            <h1>Feel Free Contact</h1>
            <h1>Me Now</h1>
          </Heading>
          <form>
            <InputWrapper>
              <input placeholder="Name" name="name" type="text" required />
              <input placeholder="Email" name="email" type="email" required />
            </InputWrapper>
            <MessageStyle>
              <textarea
                rows={10}
                id="message"
                name="message"
                placeholder="Write your notes or questions here"
                required
              />
            </MessageStyle>
            <SubmitBtn type="submit">Submit</SubmitBtn>
          </form>
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
