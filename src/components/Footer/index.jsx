import { useContext } from "react";
import { ThemeContext } from "../../styles/context";
import { FooterWrapper } from "./FooterWrapper";

const Footer = () => {
  // Context API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // to get the year
  const date = new Date().getFullYear();

  return (
    <FooterWrapper style={{ backgroundColor: darkMode ? "#333" : "#fff" }}>
      <p>Copyright {date} - Younes Lamrani</p>
    </FooterWrapper>
  );
};

export default Footer;
