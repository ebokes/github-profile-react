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
              <p>
                <h3>Repo Name:</h3> {repos.name}
              </p>
              <p>
                <h3>Language:</h3> {repos.language}
              </p>
              <p>
                <h3>Fork Count:</h3> {repos.forks}
              </p>
              <p>
                <h3>Watchers:</h3> {repos.watchers_count}
              </p>
              <p>
                <h3>Default branch:</h3> {repos.default_branch}
              </p>
              <p>
                <h3>Has issues:</h3> True
              </p>
              <p>
                <h3>Visibility:</h3> {repos.visibility}
              </p>
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
