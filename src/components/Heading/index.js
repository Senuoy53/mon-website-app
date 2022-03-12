import { useContext } from "react";
import { ThemeContext } from "../../styles/context";
import { HeadingWrapper } from "./HeadingWrapper";

const Heading = ({ children, span }) => {
  // Context API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <HeadingWrapper style={{ color: darkMode ? "#fff" : "#222" }}>
      {children} <span>{span}</span>
    </HeadingWrapper>
  );
};

export default Heading;
