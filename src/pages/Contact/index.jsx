import React from "react";
import { Container } from "../../components/reuseable";
import {
  Btn,
  ContactSection,
  ContactWrapper,
  Heading,
  InputWrapper,
  MessageStyle,
} from "./styles";

const Contact = () => {
  return (
    <ContactSection>
      <Container>
        <ContactWrapper>
          <Heading>
            <h1>Feel Free Contact</h1>
            <h1>Us Now</h1>
          </Heading>
          <form>
            <InputWrapper>
              <input placeholder="Name" name="name" type="text" required />
              <input placeholder="Email" name="email" type="email" required />
              <input placeholder="Phone" name="phone" type="phone" required />
              <input
                placeholder="Website"
                name="website"
                type="text"
                required
              />
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
            <Btn type="submit">Submit</Btn>
          </form>
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
