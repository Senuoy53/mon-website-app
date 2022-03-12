import styled from "styled-components";
import { mobile, desktop1048, mobile320 } from "../../styles/responsive";
import { theme } from "../../styles/global-styles";

export const NavbarWrapper = styled.header`
  padding: 1.5rem 5%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    padding: "1.5rem 1%",
  })}

  // Logo
  .logo {
    font-size: 25px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.PinkColor};
  }
`;

export const Nav = styled.nav`
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;

  /* Media Query Mobile */
  ${desktop1048({
    position: "fixed",
    width: "250px",
    height: "100vh",
    top: "11vh",
    right: "-250px",
    zIndex: 2,
    transition: "all  0.5s linear",
  })}

  ${mobile320({
    position: "fixed",
    width: "250px",
    height: "100vh",
    top: "14vh",
    right: "-250px",
    zIndex: 2,
    transition: "all  0.5s linear",
  })}

  a {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.PinkColor};

    margin: 0 15px;
    //The parent selector, &,

    /* Mdeia query mobile 320 */
    ${mobile320({
      fontSize: "10px",
      margin: "0rem",
      padding: "0rem",
    })}

    /* Media Query desktop  */
    ${desktop1048({
      margin: "1rem",
      padding: "1rem",
      color: theme.colors.PinkColor,
      border: "none",
      borderBottom: `2px solid ${theme.colors.PinkColor}`,
      borderRadius: "0 10px 0px",
      display: "block",
    })}



    &:hover {
      color: ${({ theme }) => theme.colors.Gray};
    }
  }

  .active {
    color: ${({ theme }) => theme.colors.Gray};
  }

  &.active {
    /* Media query Tablette */
    ${desktop1048({
      right: "0px",
    })}
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuBtn = styled.div`
  align-self: flex-start;
  display: none;
  margin-right: 20px;
  cursor: pointer;

  /* Media query tablette */
  ${desktop1048({ display: "block" })}

  &:hover div {
    background-color: ${({ theme }) => theme.colors.Gray};
  }

  div {
    background-color: ${({ theme }) => theme.colors.PinkColor};
    width: 25px;
    height: 3px;
    margin: 5px 0;
    transition: all 0.3s;
  }

  &.toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  &.toggle .line2 {
    opacity: 0;
  }

  &.toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`;
