import CentresInteretsWrapper from "./CentresInteretsWrapper";

import { useContext } from "react";
import { ThemeContext } from "../../styles/context";
import {
  faPlane,
  faPersonRunning,
  faMusic,
  faSquarePollHorizontal,
} from "@fortawesome/free-solid-svg-icons";

import { Line } from "./CentresInteretsWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../../components/Heading";

const CentresInterets = () => {
  // Context API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <CentresInteretsWrapper id="interets">
      <Heading span="Centres d'intérêts">Mes</Heading>
      <div className="box-container">
        {/* box left */}
        <div className="box box-left">
          <h3>Langues</h3>

          {/* Bar */}
          <div className="bars">
            <div className="info">
              <span>Espagnol</span>
              <span>Niveau moyen</span>
            </div>
            <Line width="50%"></Line>
            <div className="line esp"></div>
          </div>

          {/* Bar */}
          <div className="bars">
            <div className="info">
              <span>Anglais</span>
              <span>intermédiaire avancé</span>
            </div>
            <Line width="70%"></Line>
          </div>

          {/* Bar */}
          <div className="bars">
            <div className="info">
              <span>Français</span>
              <span>Niveau avancée</span>
            </div>
            <Line width="99%"></Line>
          </div>

          {/* Bar */}
          <div className="bars">
            <div className="info">
              <span>Arabe</span>
              <span>Langue maternelle</span>
            </div>
            <Line width="100%"></Line>
          </div>
        </div>

        {/* box right */}
        <div className="box box-right">
          <h3>Autres</h3>
          <p>
            <span className="p-icon">
              <FontAwesomeIcon icon={faSquarePollHorizontal} />
            </span>
            Membre de l’association des anciens lauréats de l’école eHECT
            Tanger, Maroc.
          </p>

          <div className="h-container">
            {/* Hobbies */}
            <div className="hobbies">
              <div className="h-icon">
                <FontAwesomeIcon icon={faPlane} />
              </div>
              <h5>Vogayes</h5>
            </div>

            {/* Hobbies */}
            <div className="hobbies">
              <div className="h-icon">
                <FontAwesomeIcon icon={faPersonRunning} />
              </div>
              <h5>Sports</h5>
            </div>

            {/* Hobbies */}
            <div className="hobbies">
              <div className="h-icon">
                <FontAwesomeIcon icon={faMusic} />
              </div>
              <h5>Jouer au paino</h5>
            </div>
          </div>
        </div>
      </div>
    </CentresInteretsWrapper>
  );
};

export default CentresInterets;
