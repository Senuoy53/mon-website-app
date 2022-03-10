import { HashLink } from "react-router-hash-link";
import Button from "../../components/Button";
import Me from "../../assets/img/man.png";
import IntroWrapper from "./IntroWrapper";

const Intro = () => {
  return (
    <IntroWrapper id="home">
      {/* Intro left */}
      <div className="intro-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, Je m'appelle</h2>
          <h2 className="i-name">Younes Lamrani</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Developer</div>
            </div>
          </div>
          <p className="i-desc">
            Je suis un front-end développeur, je crée des applications web de
            toutes tailles et de tous types en utilisant des technologies
            modernes tel que React Js, ES6 et autres.
          </p>
          <div className="Buttons">
            <HashLink to="#experiences" smooth>
              <Button type="submit" className="btn">
                Plus à propos de moi
              </Button>
            </HashLink>

            <a href={require("../../assets/cv/cv.pdf")} download="cv">
              <Button type="submit" className="btn">
                Mon CV
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Intro right */}
      <div className="intro-right">
        <div className="i-box-img">
          <img src={Me} className="i-img" alt="" />
        </div>
      </div>
    </IntroWrapper>
  );
};

export default Intro;
