import ExperiencesWrapper from "./ExperiencesWrapper";

import { ExperienceData } from "./constants";
import ExperienceItem from "../../components/ExperienceItem";
import { useContext } from "react";
import { ThemeContext } from "../../styles/context";
import Heading from "../../components/Heading";

const Experiences = () => {
  // Context API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <ExperiencesWrapper id="experiences">
      <Heading span="Expériences">Mes</Heading>
      <div className="box-container">
        {ExperienceData.map((item, index) => {
          return (
            <ExperienceItem
              key={index}
              date={item.date}
              title={item.title}
              parag={item.parag}
              details={item.details}
            />
          );
        })}
      </div>
    </ExperiencesWrapper>
  );
};

export default Experiences;
