import { Link } from "react-router-dom";
// hash link
import { HashLink } from "react-router-hash-link";
import { Icons, MenuBtn, Nav, NavbarWrapper } from "./NavbarWrapper";

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

  // handleClick
  const handleClick = (e) => {
    if (e.target) {
      setToggleMenu(false);
    }
  };

  return (
    <NavbarWrapper style={{ backgroundColor: darkMode ? "#333" : "#fff" }}>
      <Link to="/" className="logo">
        Younes Lamrani
      </Link>

      <Nav
        style={{ backgroundColor: darkMode ? "#333" : "#fff" }}
        className={`${toggleMenu ? "active" : ""}`}
      >
        <HashLink to="#home" smooth onClick={handleClick}>
          Home
        </HashLink>

        <HashLink to="#formations" smooth onClick={handleClick}>
          Formations
        </HashLink>

        <HashLink to="#experiences" smooth onClick={handleClick}>
          Expériences
        </HashLink>

        <HashLink to="#competences" smooth onClick={handleClick}>
          Compétences
        </HashLink>

        <HashLink to="#interets" smooth onClick={handleClick}>
          Centres d'intérêts
        </HashLink>

        <HashLink to="#portfolio" smooth onClick={handleClick}>
          Portfolio
        </HashLink>

        <HashLink to="#contact" smooth onClick={handleClick}>
          Contact
        </HashLink>
      </Nav>

      <Icons>
        <MenuBtn
          className={` ${toggleMenu ? "toggle" : ""}`}
          onClick={ToggleMenu}
        >
          <div className="line1" id="menu-btn"></div>
          <div className="line2" id="menu-btn"></div>
          <div className="line3" id="menu-btn"></div>
        </MenuBtn>

        <Toggle />
      </Icons>
    </NavbarWrapper>
  );
};

export default Navbar;
