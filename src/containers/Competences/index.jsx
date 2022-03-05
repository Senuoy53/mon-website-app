import CompetencesWrapper from "./CompetencesWrapper";

import { CompetencesData } from "./constants";

import { useContext } from "react";
import { ThemeContext } from "../../styles/context";
import {
  faCode,
  faGlobe,
  faTools,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import {
  faJava,
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faPhp,
  faWordpress,
  faNodeJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import CompetenceHeader from "../../components/CompetenceHeader";
import CompetenceBottom from "../../components/CompetenceBottom";

const Competences = () => {
  // Context API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <CompetencesWrapper id="competences">
      <h1 className="heading" style={{ color: darkMode ? "#fff" : "#222" }}>
        Mes <span>Compétences</span>
      </h1>
      <div className="box-container">
        {/* Box */}
        <div className="box">
          <CompetenceHeader icon={faCode} header="Langages de développement" />
          <CompetenceBottom label="Langage c/c++" img={faCode} />
          <CompetenceBottom label="Visual Basic 6" img={faCode} />
          <CompetenceBottom label="VB.NET" img={faCode} />
          <CompetenceBottom label="JAVA" img={faJava} />
        </div>

        {/* Box */}
        <div className="box">
          <CompetenceHeader icon={faGlobe} header="Développement Web" />
          <CompetenceBottom label="HTML" img={faHtml5} />
          <CompetenceBottom label="CSS3" img={faCss3} />
          <CompetenceBottom label="Javascript" img={faJs} />
          <CompetenceBottom label="ReactJS" img={faReact} />
          <CompetenceBottom label="PHP" img={faPhp} />
          <CompetenceBottom label="J2EE" img={faGlobe} />
          <CompetenceBottom label="Wordpress" img={faWordpress} />
        </div>

        {/* Box */}
        <div className="box">
          <CompetenceHeader icon={faTools} header="Frameworks" />
          <CompetenceBottom label="NodeJS" img={faNodeJs} />
          <CompetenceBottom label="Bootstrap" img={faBootstrap} />
          <CompetenceBottom label="Ajax" img={faTools} />
          <CompetenceBottom label="Jquery" img={faTools} />
        </div>

        {/* Box */}
        <div className="box">
          <CompetenceHeader icon={faGear} header="Backend" />
          <CompetenceBottom label="ExpressJs" img={faGear} />
          <CompetenceBottom label="MongoDB" img={faGear} />
          <CompetenceBottom label="Firebase" img={faGear} />
        </div>
      </div>
    </CompetencesWrapper>
  );
};

export default Competences;
