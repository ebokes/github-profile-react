import React, { useState } from "react";
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
import Alert from "../../components/Alert";

const Contact = () => {
  const [alert, setAlert] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formInfo);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 6000);
    setFormInfo({ name: "", email: "", message: "" });
  };

  return (
    <ContactSection>
      <Container>
        <Helmet>
          <title>Contact me</title>
          <meta
            name="description"
            content="Feel free to reach out to me today"
          />
          <link rel="canonical" href="/contact" />
        </Helmet>
        <ContactWrapper>
          <Heading
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 1 }}
            initial={{ scale: 0, opacity: 0 }}
          >
            <h1>Don't be a stranger,</h1>
            <h1>Reach out to me today</h1>
          </Heading>
          <motion.form
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            initial={{ opacity: 0, y: 20 }}
            onSubmit={onSubmit}
          >
            <InputWrapper>
              <input
                placeholder="Name"
                onChange={onChange}
                name="name"
                type="text"
                value={formInfo.name}
                required
              />
              <input
                placeholder="Email"
                name="email"
                type="email"
                onChange={onChange}
                value={formInfo.email}
                required
              />
            </InputWrapper>
            <MessageStyle>
              <textarea
                rows={10}
                id="message"
                name="message"
                placeholder="Write your notes or questions here"
                value={formInfo.message}
                onChange={onChange}
                required
              />
            </MessageStyle>
            <SubmitBtn type="submit">Submit</SubmitBtn>
          </motion.form>
          {alert && <Alert />}
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
