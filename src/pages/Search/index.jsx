import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Loader from "../../components/Loading";
import {
  CardAvatar,
  CardContent,
  Col1,
  Details,
  SearchResultContainer,
  SearchSection,
  UserCard,
  View,
} from "./styles";
import { Container } from "../../components/reuseable";

const Search = () => {
  const [input, setInput] = useState("");
  const [userSearch, setUserSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalItemCount, setTotalItemCount] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // setLoading(true);
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${input}`)
        .then((res) => {
          setUserSearch(res.data.items);
          setTotalItemCount(res.data);
        });
      // setLoading(false);
      console.log(userSearch);
    }, 1200);
  };

  const handlePageClick = (data) => {
    let currentPage = data.selected + 1;
    axios
      .get(`https://api.github.com/search/users?q=${input}&page=${currentPage}`)
      .then((res) => setUserSearch(res.data.items));
  };

  return (
    <SearchSection>
      <Container>
        {/* Title */}
        <Col1>
          <h1>Lookup Github profile</h1>
          {/* Search Bar */}
          <form>
            <div>
              <input
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setUserSearch([]);
                }}
                type="search"
                placeholder="Search"
              />
              <button onClick={onSubmitHandler}>Search</button>
            </div>
          </form>
        </Col1>

        {/* USER LIST CONTAINER*/}
        <SearchResultContainer>
          <p>Total Users Found: </p>
          {/* USER LIST */}
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
                    {/* CARD BODY */}
                    <Details>
                      <h1>{user.login}</h1>

                      <p>{user.location}</p>

                      <a href={`${user.blog}`}>{user.blog}</a>

                      <View to={`/${user.login}`}>
                        <BsGithub />
                        View Profile
                      </View>
                    </Details>
                  </CardContent>
                </UserCard>
              </div>
            );
          })}
        </SearchResultContainer>
      </Container>
    </SearchSection>
  );
};

export default Search;

// return (
//   <HomeSection>
//     <Container>
//       <Row>
//         <Col1>
//           <h1>Lookup any Github profile</h1>

// <span>
//   <input type="search" name="search" id="search" />
//   <button type="submit">Search</button>
// </span>
//         </Col1>
//       </Row>
//     </Container>
//   </HomeSection>
//     );
//   };
