import FormationsWrapper from "./FormationsWrapper";

import FormationItem from "../../components/FormationItem";
import { FormationData } from "./constants";
import { useContext } from "react";
import { ThemeContext } from "../../styles/context";
import Heading from "../../components/Heading";

const Formations = () => {
  // Context API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <FormationsWrapper id="formations">
      <Heading span="Formations">Mes</Heading>

      <div className="box-container">
        {FormationData.map((item, index) => {
          return (
            <FormationItem
              key={index}
              date={item.date}
              title={item.title}
              parag={item.parag}
            />
          );
        })}
      </div>
    </FormationsWrapper>
  );
};

export default Formations;
