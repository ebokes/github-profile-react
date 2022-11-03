import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RepoContainer } from "./styles";

const Repo = () => {
  //   const [repos, setRepos] = useState([]);

  //   useEffect(() => {
  //     const apiCall = setTimeout(() => {
  //       axios
  //         .get("https://api.github.com/users/ebokes/repos")
  //         .then((res) => setRepos(res.data));
  //     }, 1500);
  //     return () => clearTimeout(apiCall);
  //   }, []);

  const { repoid } = useParams();
  return (
    <RepoContainer>
      {/* {data.map((item) => ( */}
      <div>
        {/* <p>Name: {item.name}</p> */}
        <p>Collaborators: </p>
        {/* <p>Language: {item.language}</p> */}
        <p>Downloads: 4</p>
        {/* <p>Homepage: {item.homepage}</p> */}
        {/* <p>Fork Count: {item.forks}</p> */}
        {/* <p>Star: {item.stargasers_count}</p> */}
        {/* <p>Watchers: {item.watchers_count}</p> */}
        {/* <p>Default branch: {item.default_branch}</p> */}
        <p>Has issues: True</p>
        {/* <p>Visibility: {item.visibility}</p> */}
        <p>{repoid}</p>
      </div>
      {/* ))} */}
    </RepoContainer>
  );
};

export default Repo;
