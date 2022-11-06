import { Col1, Col2, HomeSection, ProfileBtn, Row, SearchBtn } from "./styles";
import { Container } from "../../components/reuseable";
import { Helmet } from "react-helmet-async";

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
            <h2>Welcome to My Github Porfolio</h2>
            <p>
              Check out my Profile <br />
              or Search for any Github User
            </p>
          </Col1>
          <Col2>
            <SearchBtn to="/profile">My Profile</SearchBtn>
            <ProfileBtn to="/search">Search User</ProfileBtn>
          </Col2>
        </Row>
      </Container>
    </HomeSection>
  );
};

export default Home;
