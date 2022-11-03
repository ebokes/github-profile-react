import React, { useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container, Section } from "../../components/reuseable";
import { Output, ProfileContainer, ProfileWrapper, SideBar } from "./styles";

const Profile = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
    handleClick();
  };
  const handleClick = () => ref.current?.scrollIntoView({ behavior: "smooth" });
  const ref = useRef(null);

  return (
    <Section>
      <Container>
        <ProfileWrapper>
          <h2>Profile Page</h2>
          <p>
            Esoft is a Murphy, Texas based company managed by highly experienced
            information technology professionals and offers consulting services
            in the areas of Software Development, IT Infrastructure Management,
            Security Infrastructure design, Quality Assurance and
            implementation. Esoft has considerable experience delivering
            solutions in single and multi operating system environments.
          </p>

          <ProfileContainer>
            <SideBar>
              <li>
                <NavLink
                  onClick={handleShow}
                  to="/repos"
                  className={({ isActive }) => (isActive ? "active" : "normal")}
                >
                  My Repos
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleShow}
                  to="/profile/about"
                  className={({ isActive }) => (isActive ? "active" : "normal")}
                >
                  Search Others
                </NavLink>
              </li>
            </SideBar>
            {/* {show && (
              <Output ref={ref}>
                <div>
                  <Outlet />
                </div>
              </Output> */}
            {/* )} */}
          </ProfileContainer>
        </ProfileWrapper>
      </Container>
    </Section>
  );
};

export default Profile;
