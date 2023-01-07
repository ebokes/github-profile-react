import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "../reuseable";
import {
  Row,
  RepoItem,
  RepoList,
  ButtonGroup,
  Col,
  Next,
  OutletContainer,
  Pagebtn,
  Paginate,
  Prev,
  RepoLink,
  DetailsBtn,
  AllReposSection,
} from "./styles";

const AllRepos = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllRepos = async () => {
      loading;
      try {
        const response = await axios.get(
          "https://api.github.com/users/ebokes/repos"
        );
        setRepos(response.data);
        setLoading(true);
      } catch (error) {
        console.error(error);
      }
    };
    getAllRepos();
  }, []);

  const PER_PAGE = 6;
  const total = repos?.length;
  const pages = Math.ceil(total / PER_PAGE);
  const skip = page * PER_PAGE - PER_PAGE;

  return (
    <AllReposSection>
      <Container>
        <Row id="repos">
          <OutletContainer>
            {loading && (
              <Col>
                <div>
                  <h2>Repositories</h2>
                  <RepoList>
                    {repos?.slice(skip, skip + PER_PAGE).map((item) => (
                      <RepoItem key={item.id}>
                        <RepoLink to={`/profile/${item.id}`}>
                          {item.name}
                        </RepoLink>
                        <DetailsBtn to={`/profile/${item.id}`}>
                          View Details
                        </DetailsBtn>
                      </RepoItem>
                    ))}
                  </RepoList>
                </div>
              </Col>
            )}
          </OutletContainer>
          {loading && (
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

                {Array.from({ length: pages }, (value, index) => index + 1).map(
                  (repo) => (
                    <Pagebtn
                      key={repo}
                      onClick={() => {
                        setPage(repo);
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
                  }}
                >
                  Next
                </Next>
              </ButtonGroup>
            </Paginate>
          )}
        </Row>
      </Container>
    </AllReposSection>
  );
};

export default AllRepos;
