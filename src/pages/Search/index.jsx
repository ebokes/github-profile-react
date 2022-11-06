import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import axios from "axios";
import Loader from "../../components/Loading";
import {
  CardAvatar,
  CardContent,
  Details,
  SearchBar,
  SearchContainer,
  SearchList,
  SearchResultContainer,
  SearchSection,
  UserCard,
  View,
} from "./styles";
import { Btn, Container } from "../../components/reuseable";
import Loading from "../../components/Loading";
import { Helmet } from "react-helmet-async";

const Search = () => {
  const [input, setInput] = useState("");
  const [userSearch, setUserSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      axios
        .get(`https://api.github.com/search/users?q=${input}`)
        .then((res) => {
          setUserSearch(res.data.items);
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
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
        {/* Title */}
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
              <Btn onClick={onSubmitHandler}>Search</Btn>
            </form>
          </SearchBar>
          {/* USER LIST CONTAINER*/}

          <SearchResultContainer>
            <p>Total Users Found: {userSearch.length} </p>
            {/* USER LIST */}
            <SearchList>
              {userSearch.map((user) => {
                return (
                  <div key={user.id}>
                    {/* USER CARD */}
                    <UserCard>
                      {/* CARD AVATAR */}
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
