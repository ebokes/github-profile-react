import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { Container } from "../reuseable";
import { BackBtn, RepoContainer, RepoSection } from "./styles";

const Repo = () => {
  const [repos, setRepos] = useState([]);
  const params = useParams();

  useEffect(() => {
    const apiCall = async () => {
      try {
        const res = await axios.get(
          `https://api.github.com/repositories/${params.repoId}`
        );
        setRepos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    apiCall();
  }, [params]);

  return (
    <RepoSection>
      <Container>
        <RepoContainer>
          <BackBtn to="/profile/allrepos">
            <HiArrowNarrowLeft />
          </BackBtn>
          <div>
            <h2>Repository Details</h2>
            <span>
              <h3>Repo Name:</h3> <p>{repos.name}</p>
            </span>
            <span>
              <h3>Language:</h3> <p>{repos.language}</p>
            </span>
            <span>
              <h3>Fork Count:</h3> <p>{repos.forks}</p>
            </span>
            <span>
              <h3>Watchers:</h3> <p>{repos.watchers_count}</p>
            </span>
            <span>
              <h3>Default branch:</h3> <p>{repos.default_branch}</p>
            </span>
            <span>
              <h3>Visibility:</h3> <p>{repos.visibility}</p>
            </span>
            <span>
              <h3>Date Created:</h3> <p>{`${repos.created_at}`.slice(0, 10)}</p>
            </span>
            <span>
              <a href={repos.html_url} target="_blank">
                View Repo
              </a>
              {repos.homepage && (
                <a href={repos.homepage} target="_blank">
                  Live Demo
                </a>
              )}
            </span>
          </div>
        </RepoContainer>
      </Container>
    </RepoSection>
  );
};

export default Repo;
