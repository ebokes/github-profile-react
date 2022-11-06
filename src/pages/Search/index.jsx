import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import axios from "axios";
import Loader from "../../components/Loading";
import {
  CardAvatar,
  CardContent,
  Details,
  SearchBar,
  SearchBtn,
  SearchContainer,
  SearchList,
  SearchResultContainer,
  SearchSection,
  UserCard,
  View,
} from "./styles";
import { Container } from "../../components/reuseable";
import { Helmet } from "react-helmet-async";

const Search = () => {
  const [input, setInput] = useState("");
  const [userSearch, setUserSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.github.com/search/users?q=${input}`
      );
      setUserSearch(response.data.items);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <SearchSection>
      <Container>
        <Helmet>
          <title>Search Github Users</title>
          <meta name="description" content="Search for any Github profile" />
          <link rel="canonical" href="/search" />
        </Helmet>
        <SearchContainer>
          <SearchBar>
            <h1>Enter name or Github username</h1>
            {/* Search Bar */}
            <form>
              <input
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setUserSearch([]);
                }}
                type="search"
                placeholder="Search"
                required
              />
              <SearchBtn onClick={onSubmitHandler}>Search</SearchBtn>
            </form>
          </SearchBar>

          <SearchResultContainer>
            <SearchList>
              {userSearch.map((user) => {
                return (
                  <div key={user.id}>
                    <UserCard>
                      <CardContent>
                        <CardAvatar>
                          <img alt="avatar" src={user.avatar_url} />
                        </CardAvatar>
                        <Details>
                          <h1>{user.login}</h1>
                          <p>{user.location}</p>
                          <View href={`${user.html_url}`} target="_blank">
                            <BsGithub />
                            <p>View Profile</p>
                          </View>
                        </Details>
                      </CardContent>
                    </UserCard>
                  </div>
                );
              })}
            </SearchList>
          </SearchResultContainer>
        </SearchContainer>
      </Container>
    </SearchSection>
  );
};

export default Search;
