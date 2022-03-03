import Button from "../../components/Button";
import Me from "../../img/man.png";
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
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services
            online sotres.
          </p>
          <div className="Buttons">
            <Button type="submit" className="btn">
              Plus à propos de moi
            </Button>
            <Button type="submit" className="btn">
              Mon CV
            </Button>
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
