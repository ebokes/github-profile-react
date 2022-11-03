import { useEffect, useState } from "react";
import { HiLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import axios from "axios";
import Loader from "../../components/Loading";
import {
  CardBody,
  Col1,
  Col2,
  OutletContainer,
  ProfileCard,
  ProfileContainer,
  ProfileSection,
  RepoItem,
  RepoList,
  RepoOutlet,
  Stats,
  ViewProfile,
} from "./styles";
import { NavLink, Outlet } from "react-router-dom";

const MyProfile = () => {
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);

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
  // console.log(data);
  // console.log(repos);

  return (
    <ProfileSection>
      <ProfileContainer>
        <h1>My GitHub Profile</h1>
        {/* Loader animation data control  */}
        {data.length !== 0 ? (
          <>
            <ProfileCard>
              <Col1>
                <img alt="avatar" src={data.avatar_url} />
              </Col1>
              <Col2>
                <CardBody>
                  <h1>{data.name}</h1>
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
                      <p>Repos: {data.public_repos}</p>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/ebokes?tab=followers"
                      target="_blank"
                    >
                      <p>Followers: {data.followers} </p>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/ebokes?tab=following"
                      target="_blank"
                    >
                      <p>Following: {data.following}</p>
                    </a>
                  </div>
                </Stats>
              </Col2>
            </ProfileCard>
            <h1>Repositories</h1>
            <OutletContainer>
              <RepoList>
                <div>
                  {repos.map((item) => (
                    <RepoItem key={item.id}>
                      <NavLink
                        to={`/profile/${item.name}`}
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
          </>
        ) : (
          <Loader />
        )}
      </ProfileContainer>
    </ProfileSection>
  );
};

export default MyProfile;
