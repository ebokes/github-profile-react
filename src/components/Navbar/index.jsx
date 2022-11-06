import * as React from "react";
import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Header, NavContainer, Logo, HamburgerStyle, Menu } from "./styles";
import { Sling as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Header>
        <NavContainer>
          <Logo to="/">
            <h2>Github Portfolio</h2>
          </Logo>
          <HamburgerStyle>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={26}
              rounded
              label="Show menu"
              padding={0}
              color="#959595"
            />
          </HamburgerStyle>
          <Menu isOpen={isOpen}>
            <li>
              <NavLink
                onClick={handleClose}
                to="/"
                className={({ isActive }) => (isActive ? "active" : "normal")}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClose}
                to="/profile"
                className={({ isActive }) => (isActive ? "active" : "normal")}
              >
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClose}
                to="/search"
                className={({ isActive }) => (isActive ? "active" : "normal")}
              >
                Search User
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClose}
                to="/err-boundary"
                className={({ isActive }) => (isActive ? "active" : "normal")}
              >
                Error Test
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClose}
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "normal")}
              >
                Contact
              </NavLink>
            </li>
          </Menu>
        </NavContainer>
      </Header>
    </ClickAwayListener>
  );
};

export default Navbar;
