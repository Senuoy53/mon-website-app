import sun from "../../img/sun.png";
import moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../styles/context";
import ToggleWrapper from "./ToggleWrapper";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <ToggleWrapper>
      <img src={sun} className="t-icon" alt="" />
      <img src={moon} className="t-icon" alt="" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: darkMode ? "0px" : "25px" }}
      ></div>
    </ToggleWrapper>
  );
};

export default Toggle;
