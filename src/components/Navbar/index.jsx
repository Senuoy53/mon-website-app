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
        <HashLink to="#home" smooth>
          Home
        </HashLink>

        <HashLink to="#formations" smooth>
          Formations
        </HashLink>

        <HashLink to="#experiences" smooth>
          Expériences
        </HashLink>

        <HashLink to="#competences" smooth>
          Compétences
        </HashLink>

        <HashLink to="#interets" smooth>
          Centres d'intérêts
        </HashLink>

        <HashLink to="#" smooth>
          Portfolio
        </HashLink>

        <HashLink to="#" smooth>
          Contact
        </HashLink>
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
