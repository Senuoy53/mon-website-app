import { Link, NavLink } from "react-router-dom";
// hash link
import { HashLink } from "react-router-hash-link";
import { MenuBtn, Nav, NavbarWrapper } from "./NavbarWrapper";

import Toggle from "../Toggle";
import { useContext, useState } from "react";
import { ThemeContext } from "../../styles/context";

const Navbar = () => {
  // UseState
  const [toggleMenu, setToggleMenu] = useState(false);

  // Context API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // ToggleMenu
  const ToggleMenu = (e) => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <NavbarWrapper style={{ backgroundColor: darkMode ? "#333" : "#fff" }}>
      <Link to="/home" className="logo">
        Younes Lamrani
      </Link>

      <Nav className={`${toggleMenu ? "active" : ""}`}>
        <HashLink to="#home">Home</HashLink>

        <HashLink to="#formations">Formations</HashLink>

        <HashLink to="#experiences">Expériences</HashLink>

        <NavLink to="/#">Compétences</NavLink>

        <NavLink to="/#">Centres d'intérêts</NavLink>

        <NavLink to="/#">Portfolio</NavLink>

        <NavLink to="/#">Contact</NavLink>
      </Nav>

      <MenuBtn>
        <div className={` ${toggleMenu ? "toggle" : ""}`} onClick={ToggleMenu}>
          <div className="line1" id="menu-btn"></div>
          <div className="line2" id="menu-btn"></div>
          <div className="line3" id="menu-btn"></div>
        </div>
      </MenuBtn>

      <Toggle />
    </NavbarWrapper>
  );
};

export default Navbar;
