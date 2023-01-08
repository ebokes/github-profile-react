import { useEffect, useState } from "react";
import { HiLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { GoLocation, GoVerified } from "react-icons/go";
import axios from "axios";
import Loader from "../../components/Loading";
import {
  Col1,
  Col2,
  ProfileBtnGroup,
  ProfileCard,
  ProfileContainer,
  ProfileSection,
  RepoToggleBtn,
  Row1,
  Stats,
  ViewProfile,
} from "./styles";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProfileInfo = async () => {
      try {
        const res = await axios.get("https://api.github.com/users/ebokes");
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProfileInfo();
  }, []);

  return (
    <ProfileSection>
      <ProfileContainer>
        <Helmet>
          <title>Chibuokem's Github Profile</title>
          <meta
            name="description"
            content="Github Repositories of Chibuokem Egbuchulam"
          />
          <link rel="canonical" href="/profile" />
        </Helmet>
        {data.length !== 0 ? (
          <>
            <Row1
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "tween", duration: 0.5 }}
              initial={{ scale: 0, opacity: 0 }}
            >
              <h1>My GitHub Profile</h1>
              <ProfileCard>
                <Col1>
                  <div>
                    <img alt="avatar" src={data.avatar_url} />
                  </div>
                </Col1>
                <Col2>
                  <span>
                    <h2>
                      <span>{data.name}</span>
                      <span>@{data.login}</span>
                    </h2>
                  </span>
                  <span>
                    <p>{data.bio}</p>
                  </span>
                  <span>
                    <HiLink />
                    <a href={`${data.blog}`} target="_blank">
                      Personal Porfolio Website
                    </a>
                  </span>
                  <span>
                    <GoLocation />
                    <p>{data.location}</p>
                  </span>
                  <span>
                    <GoVerified /> <p>{`${data.created_at}`.slice(0, 10)}</p>
                  </span>

                  <Stats>
                    <div>
                      <span>Repos: </span>
                      <span>{data.public_repos}</span>
                    </div>
                    <div>
                      <span>Followers: </span> <span>{data.followers}</span>
                    </div>
                    <div>
                      <span>Following: </span> <span>{data.following}</span>
                    </div>
                  </Stats>
                  <ProfileBtnGroup>
                    <ViewProfile href={`${data.html_url}`} target="_blank">
                      <span>
                        <BsGithub />
                        <span>View Profile</span>
                      </span>
                    </ViewProfile>
                    <RepoToggleBtn to="/profile/allrepos">
                      View Repos
                    </RepoToggleBtn>
                  </ProfileBtnGroup>
                </Col2>
              </ProfileCard>
            </Row1>
          </>
        ) : (
          <Loader />
        )}
      </ProfileContainer>
    </ProfileSection>
  );
};

export default MyProfile;
