import { useEffect, useRef, useState } from "react";
import { HiLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { GoLocation, GoVerified } from "react-icons/go";
import axios from "axios";
import Loader from "../../components/Loading";
import {
  ButtonGroup,
  Col1,
  Col2,
  Left,
  Next,
  OutletContainer,
  Pagebtn,
  Paginate,
  Prev,
  ProfileBtnGroup,
  ProfileCard,
  ProfileContainer,
  ProfileSection,
  RepoItem,
  RepoList,
  RepoToggleBtn,
  Right,
  Row1,
  Row2,
  Stats,
  ViewProfile,
} from "./styles";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [toggleView, setToggleView] = useState(false);
  const [toggleOutlet, setToggleOutlet] = useState(false);
  const ref = useRef(null);
  const repoRef = useRef(null);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const res = await axios.get("https://api.github.com/users/ebokes");
        setData(res.data);
        const response = await axios.get(
          "https://api.github.com/users/ebokes/repos"
        );
        setRepos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    apiCall();
  }, []);

  const PER_PAGE = 5;
  const total = repos?.length;
  const pages = Math.ceil(total / PER_PAGE);
  const skip = page * PER_PAGE - PER_PAGE;

  const handleToggleView = () => {
    setToggleView(true);
  };
  const handleToggleOutlet = () => {
    setToggleOutlet(true);
    repoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
                    <RepoToggleBtn href="#repos" onClick={handleToggleView}>
                      View Details
                    </RepoToggleBtn>
                  </ProfileBtnGroup>
                </Col2>
              </ProfileCard>
            </Row1>
            {toggleView && (
              <Row2 id="repos">
                <OutletContainer ref={ref}>
                  <Left>
                    <div>
                      <h2>Repositories</h2>
                      <RepoList>
                        {repos?.slice(skip, skip + PER_PAGE).map((item) => (
                          <RepoItem key={item.id}>
                            <NavLink
                              to={`/profile/${item.id}`}
                              className={({ isActive }) =>
                                isActive ? "active" : "normal"
                              }
                              onClick={handleToggleOutlet}
                            >
                              {item.name}
                            </NavLink>
                          </RepoItem>
                        ))}
                      </RepoList>
                    </div>
                  </Left>
                  {toggleOutlet && (
                    <Right
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      initial={{ x: 100, opacity: 0 }}
                      ref={repoRef}
                    >
                      <Outlet />
                    </Right>
                  )}
                </OutletContainer>
                <Paginate>
                  <div>
                    {page} of {pages}
                  </div>

                  <ButtonGroup>
                    <Prev
                      disabled={page <= 1}
                      onClick={() => {
                        setPage((prev) => prev - 1);
                      }}
                    >
                      Prev
                    </Prev>

                    {Array.from(
                      { length: pages },
                      (value, index) => index + 1
                    ).map((repo) => (
                      <Pagebtn
                        key={repo}
                        onClick={() => {
                          setPage(repo);
                        }}
                      >
                        {repo}
                      </Pagebtn>
                    ))}
                    <Next
                      disabled={page >= pages}
                      aria-disabled={page >= pages}
                      onClick={() => {
                        setPage((prev) => prev + 1);
                      }}
                    >
                      Next
                    </Next>
                  </ButtonGroup>
                </Paginate>
              </Row2>
            )}
          </>
        ) : (
          <Loader />
        )}
      </ProfileContainer>
    </ProfileSection>
  );
};

export default MyProfile;
