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
                <h3>Has issues:</h3> <p>True</p>
              </span>
              <span>
                <h3>Visibility:</h3> <p>{repos.visibility}</p>
              </span>
              <span>
                <h3>Date Created:</h3>{" "}
                <p>{`${repos.created_at}`.slice(0, 10)}</p>
              </span>
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
