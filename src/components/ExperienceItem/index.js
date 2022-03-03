import ExperienceItemWrapper from "./ExperienceItemWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../styles/context";

const ExperienceItem = ({ date, title, parag, details }) => {
  // Context API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <ExperienceItemWrapper>
      <div className="icon">
        <FontAwesomeIcon icon={faBriefcase} />
      </div>
      <span>{date}</span>
      <h3 style={{ color: darkMode ? "#fff" : "#000" }}>{title}</h3>
      <p style={{ color: darkMode ? "#fff" : "#000" }}>{parag}</p>
      <p style={{ color: darkMode ? "#fff" : "#000" }}>{details}</p>
    </ExperienceItemWrapper>
  );
};

export default ExperienceItem;
