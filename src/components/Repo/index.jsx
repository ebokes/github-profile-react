import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { RepoContainer } from "./styles";

const Repo = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const apiCall = setTimeout(() => {
      setLoading(true);
      axios
        .get(`https://api.github.com/repositories/${params.repoId}`)
        .then((res) => setRepos(res.data));
      setLoading(false);
    }, 1500);
    return () => clearTimeout(apiCall);
  }, [params]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <RepoContainer>
          {repos && (
            <div>
              <p>Name: {repos.name}</p>
              <p>Language: {repos.language}</p>
              <p>Fork Count: {repos.forks}</p>
              {repos.stargazers_count > 0 ? (
                <p>Star: {repos.stargasers_count}</p>
              ) : (
                ""
              )}
              <p>Watchers: {repos.watchers_count}</p>
              <p>Default branch: {repos.default_branch}</p>
              <p>Has issues: True</p>
              <p>Visibility: {repos.visibility}</p>
              <p>Created: {repos.created_at}</p>
              <a href={repos.html_url} target="_blank">
                View more
              </a>
            </div>
          )}
        </RepoContainer>
      )}
    </>
  );
};

export default Repo;
