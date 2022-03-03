import FormationItemWrapper from "./FormationItemWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../styles/context";

const FormationItem = ({ date, title, parag }) => {
  // Context API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <FormationItemWrapper>
      <div className="icon">
        <FontAwesomeIcon icon={faGraduationCap} />
      </div>
      <span>{date}</span>
      <h3 style={{ color: darkMode ? "#fff" : "#000" }}>{title}</h3>
      <p style={{ color: darkMode ? "#fff" : "#000" }}>{parag}</p>
    </FormationItemWrapper>
  );
};

export default FormationItem;
