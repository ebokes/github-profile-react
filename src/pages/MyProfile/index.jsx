import { useEffect, useRef, useState } from "react";
import { HiLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { GoLocation, GoVerified } from "react-icons/go";
import axios from "axios";
import Loader from "../../components/Loading";
import {
  ButtonGroup,
  Col1,
  Col2,
  Col3,
  ColGroup,
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
  RepoOutlet,
  RepoToggleBtn,
  Row1,
  Row2,
  ViewProfile,
} from "./styles";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [toggleView, setToggleView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const apiCall = setTimeout(() => {
      axios
        .get("https://api.github.com/users/ebokes")
        .then((res) => setData(res.data));
      axios
        .get("https://api.github.com/users/ebokes/repos")
        .then((res) => setRepos(res.data));
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
        {/* Loader animation data control  */}
        {data.length !== 0 ? (
          <>
            <Row1>
              <h1>My GitHub Profile</h1>
              <ProfileCard>
                <ColGroup>
                  <Col1>
                    <img alt="avatar" src={data.avatar_url} />
                  </Col1>
                  <Col2>
                    <div>
                      <h2>{data.name}</h2>
                      <p>@{data.login}</p>
                    </div>
                    <p>{data.bio}</p>
                    <span>
                      <GoLocation />
                      <p>{data.location}</p>
                    </span>
                    <span>
                      <HiLink />{" "}
                      <a href={`${data.blog}`} target="_blank">
                        {data.blog}
                      </a>
                    </span>
                    <p>
                      <GoVerified /> {data.created_at}
                    </p>
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
                </ColGroup>
                <Col3>
                  <div>
                    <a
                      href="https://github.com/ebokes?tab=repositories"
                      target="_blank"
                    >
                      <span>Repos</span>
                      <span>{data.public_repos}</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/ebokes?tab=followers"
                      target="_blank"
                    >
                      <span>Followers</span> <span>{data.followers}</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/ebokes?tab=following"
                      target="_blank"
                    >
                      <span>Following</span> <span>{data.following}</span>
                    </a>
                  </div>
                </Col3>
                {/* </Col2> */}
              </ProfileCard>
            </Row1>
            {toggleView && (
              <Row2>
                <OutletContainer ref={ref}>
                  <RepoList>
                    <div>
                      <h2>Repositories</h2>
                      {repos?.slice(skip, skip + PER_PAGE).map((item) => (
                        <RepoItem key={item.id}>
                          <NavLink
                            to={`/profile/${item.id}`}
                            className={({ isActive }) =>
                              isActive ? "active" : "normal"
                            }
                          >
                            {item.name}
                          </NavLink>
                        </RepoItem>
                      ))}
                    </div>
                  </RepoList>
                  <RepoOutlet>
                    <Outlet />
                  </RepoOutlet>
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
                        // style={{ color: page === pages && "red" }}
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
