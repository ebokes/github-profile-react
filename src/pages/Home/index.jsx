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
            <h2>Welcome to Github Profile Lookup</h2>
            <p>search for any github profile</p>
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
