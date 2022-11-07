import { Col1, Col2, HomeSection, ProfileBtn, Row, SearchBtn } from "./styles";
import { Container } from "../../components/reuseable";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <HomeSection>
      <Container>
        <Helmet>
          <title>Github Portfolio Home</title>
          <meta name="description" content="Github Portfolio Homepage" />
          <link rel="canonical" href="/" />
        </Helmet>
        <Row>
          <Col1>
            <motion.h2
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "tween", duration: 1 }}
              initial={{ scale: 0, opacity: 0 }}
            >
              Hi, I am Chibuokem,
              <br />
              Welcome to My Github Porfolio
            </motion.h2>
            <motion.p
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "tween", duration: 1.3 }}
              initial={{ scale: 0, opacity: 0 }}
            >
              Check out my Profile <br />
              or Search for any Github User
            </motion.p>
          </Col1>
          <Col2
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            initial={{ opacity: 0, y: 20 }}
          >
            <SearchBtn to="/profile">My Profile</SearchBtn>
            <ProfileBtn to="/search">Search User</ProfileBtn>
          </Col2>
        </Row>
      </Container>
    </HomeSection>
  );
};

export default Home;
