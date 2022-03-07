import PortfolioItemWrapper from "./PortfolioItemWrapper";
import project6 from "../../img/portfolio/project-6.png";
import { useContext } from "react";
import { ThemeContext } from "../../styles/context";

const PortfolioItem = ({ img, ptitle, onClick }) => {
  // Context API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <PortfolioItemWrapper
      style={{ border: darkMode ? "2px solid #fff" : " 2px solid#222" }}
    >
      <div className="box-inner">
        <div
          className="b-browser"
          style={{ backgroundColor: darkMode ? "#fff" : "#222" }}
        >
          <div
            className="b-circle"
            style={{ backgroundColor: darkMode ? "#666" : "#fff" }}
          ></div>
          <div
            className="b-circle"
            style={{ backgroundColor: darkMode ? "#666" : "#fff" }}
          ></div>
          <div
            className="b-circle"
            style={{ backgroundColor: darkMode ? "#666" : "#fff" }}
          ></div>
        </div>
        <div className="box-img">
          <img src={img} alt="portfolio" />
          <span className="view-project" onClick={onClick} id={ptitle}>
            Voir projet
          </span>
        </div>
        <p className="box-title">{ptitle}</p>
      </div>
    </PortfolioItemWrapper>
  );
};

export default PortfolioItem;
