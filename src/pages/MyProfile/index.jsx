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
    const apiCall = setTimeout(() => {
      try {
        axios
          .get("https://api.github.com/users/ebokes")
          .then((res) => setData(res.data));
        axios
          .get("https://api.github.com/users/ebokes/repos")
          .then((res) => setRepos(res.data));
      } catch (error) {
        console.errorog(error);
      }
    }, 1500);
    return () => clearTimeout(apiCall);
  }, []);

  const PER_PAGE = 5;
  const total = repos?.length;
  const pages = Math.ceil(total / PER_PAGE);
  const skip = page * PER_PAGE - PER_PAGE;

  const handleToggleView = () => {
    setToggleView(true);
    ref.current?.scrollIntoView({ behavior: "smooth" });
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
            <Row1>
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
                      {data.name}
                      <p>@{data.login}</p>
                    </h2>
                  </span>
                  <span>
                    <p>{data.bio}</p>
                  </span>
                  <span>
                    <HiLink />
                    <a href={`${data.blog}`} target="_blank">
                      chibuokemegbuchulam.com
                    </a>
                  </span>
                  <span>
                    <GoLocation />
                    <p>{data.location}</p>
                  </span>
                  <span>
                    <p>
                      <GoVerified /> {data.created_at}
                    </p>
                  </span>
                  <Stats>
                    <div>
                      <a
                        href="https://github.com/ebokes?tab=repositories"
                        target="_blank"
                      >
                        <span>Repos: </span>
                        <span>{data.public_repos}</span>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://github.com/ebokes?tab=followers"
                        target="_blank"
                      >
                        <span>Followers: </span> <span>{data.followers}</span>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://github.com/ebokes?tab=following"
                        target="_blank"
                      >
                        <span>Following: </span> <span>{data.following}</span>
                      </a>
                    </div>
                  </Stats>
                  <ProfileBtnGroup>
                    <ViewProfile href={`${data.html_url}`} target="_blank">
                      <span>
                        <BsGithub />
                        <span>View Profile</span>
                      </span>
                    </ViewProfile>
                    <RepoToggleBtn onClick={handleToggleView}>
                      View Repos
                    </RepoToggleBtn>
                  </ProfileBtnGroup>
                </Col2>
              </ProfileCard>
            </Row1>
            {toggleView && (
              <Row2>
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
                    <Right ref={repoRef}>
                      <Outlet />
                    </Right>
                  )}
                </OutletContainer>
                <Paginate>
                  <div>
                    Pages: {page} of {pages}
                  </div>

                  <ButtonGroup>
                    <Prev
                      disabled={page <= 1}
                      onClick={() => {
                        setPage((prev) => prev - 1);
                      }}
                    >
                      prev
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
                      next
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
