import { useEffect, useRef, useState } from "react";
import { HiLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import axios from "axios";
import Loader from "../../components/Loading";
import {
  ButtonGroup,
  CardBody,
  Col1,
  // Col2,
  Next,
  OutletContainer,
  Pagebtn,
  Paginate,
  Prev,
  ProfileCard,
  ProfileContainer,
  ProfileSection,
  RepoItem,
  RepoList,
  RepoOutlet,
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
                <Col1>
                  <img alt="avatar" src={data.avatar_url} />
                </Col1>
                {/* <Col2> */}
                <CardBody>
                  <h2>{data.name}</h2>
                  <br />
                  <p>@{data.login}</p>
                  <br />
                  {/* <h2>Bio</h2> */}
                  <p>{data.bio}</p>
                  {data.company && (
                    <p>
                      <GrGroup />: {data.company}
                    </p>
                  )}
                  <span>
                    <GoLocation />
                    <p>{data.location}</p>
                  </span>
                  <p>
                    <HiLink /> :{" "}
                    <a href={`${data.blog}`} target="_blank">
                      {data.blog}
                    </a>
                  </p>
                  {data.hireable && <p>Hireable: {data.hireable}</p>}
                  <br />
                  <ViewProfile href={`${data.html_url}`} target="_blank">
                    <span>
                      <BsGithub />
                      <span>View Profile</span>
                    </span>
                  </ViewProfile>
                </CardBody>
                <Stats>
                  <div>
                    <a
                      href="https://github.com/ebokes?tab=repositories"
                      target="_blank"
                    >
                      <p>
                        <span>Repos:</span>
                        <span>{data.public_repos}</span>
                      </p>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/ebokes?tab=followers"
                      target="_blank"
                    >
                      <p>
                        <span>Followers</span> <span>{data.followers}</span>
                      </p>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/ebokes?tab=following"
                      target="_blank"
                    >
                      <p>
                        <span>Following</span> <span>{data.following}</span>
                      </p>
                    </a>
                  </div>
                </Stats>
                {/* </Col2> */}
              </ProfileCard>
            </Row1>
            <Row2>
              <OutletContainer>
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
            </Row2>
            <Paginate>
              <div>
                Pages: {page} of {pages}
              </div>

              <ButtonGroup>
                <Prev
                  disabled={page <= 1}
                  onClick={() => {
                    setPage((prev) => prev - 1);
                    ref.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  prev
                </Prev>

                {Array.from({ length: pages }, (value, index) => index + 1).map(
                  (repo) => (
                    <Pagebtn
                      // style={{ color: page === pages && "red" }}
                      key={repo}
                      onClick={() => {
                        setPage(repo);
                        ref.current?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {repo}
                    </Pagebtn>
                  )
                )}
                <Next
                  disabled={page >= pages}
                  aria-disabled={page >= pages}
                  onClick={() => {
                    setPage((prev) => prev + 1);
                    ref.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  next
                </Next>
              </ButtonGroup>
            </Paginate>
          </>
        ) : (
          <Loader />
        )}
      </ProfileContainer>
    </ProfileSection>
  );
};

export default MyProfile;
