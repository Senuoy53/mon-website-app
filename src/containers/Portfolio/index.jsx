import PortfolioWrapper from "./PortfolioWrapper";

import { useContext } from "react";
import { ThemeContext } from "../../styles/context";

import PortfolioItem from "../../components/PortfolioItem";
import { projectData, detailsImageData } from "./constants";
import PortfolioDetail from "../../components/PortfolioDetail";
import { createStructuredSelector } from "reselect";
import { makeSelectClickedData } from "./selectors";
import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "./actions";
import { useState } from "react";
import Heading from "../../components/Heading";

// Appeler le selector
const clickedState = createStructuredSelector({
  clicked: makeSelectClickedData(),
});

const Portfolio = () => {
  // Context API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Selectors
  const { clicked } = useSelector(clickedState);
  const dispatch = useDispatch();

  // local state
  const [title, setTitle] = useState("");
  const [dPortfolio, setDPortfolio] = useState("");

  // handleClick
  const handleClick = (e) => {
    e.preventDefault();

    dispatch(setClicked(true));

    setTitle(e.target.id);

    // get the image for detail portfolio
    const pfolio = detailsImageData.find((portfolio) => {
      return portfolio.title === e.target.id;
    });

    setDPortfolio(pfolio);

    // stop scrolling the main page
    document.body.classList.toggle("stop-scrolling");
  };

  return (
    <PortfolioWrapper id="portfolio">
      <Heading span="Portfolio">Mes</Heading>
      <div className="box-container">
        {/* Box */}

        {projectData.map((project, index) => {
          return (
            <PortfolioItem
              key={index}
              ptitle={project.ptitle}
              img={project.img}
              onClick={handleClick}
            />
          );
        })}

        {clicked && (
          <PortfolioDetail
            resume={dPortfolio.resume}
            date={dPortfolio.date}
            technologie={dPortfolio.technologie}
            img={dPortfolio.img}
            dTitle={title}
          />
        )}
      </div>
    </PortfolioWrapper>
  );
};

export default Portfolio;
