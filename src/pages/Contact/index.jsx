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
import { motion } from "framer-motion";

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
          <Heading
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 1 }}
            initial={{ scale: 0, opacity: 0 }}
          >
            <h1>Feel Free Contact</h1>
            <h1>Me Now</h1>
          </Heading>
          <motion.form
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            initial={{ opacity: 0, y: 20 }}
          >
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
          </motion.form>
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
