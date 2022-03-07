import PortfolioDetailWrapper from "./PortfolioDetailWrapper";
import project6 from "../../img/portfolio/project-6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlay } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import { useContext } from "react";
import { ThemeContext } from "../../styles/context";
import { useDispatch } from "react-redux";
import { setClicked } from "../../containers/Portfolio/actions";
import { useState } from "react";
import { detailsImageData } from "./constants";

const PortfolioDetail = ({ resume, date, technologie, img, dTitle }) => {
  // Context API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // dispatcher
  const dispatch = useDispatch();

  // state
  const [addDetails, setAddDetails] = useState(false);

  // handleClick
  const handleClick = (e) => {
    e.preventDefault();

    switch (e.target.id) {
      case "close":
        dispatch(setClicked(false));

        break;
      case "add":
        setAddDetails(!addDetails);
        break;
      default:
        break;
    }
  };

  return (
    <PortfolioDetailWrapper
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
      }}
    >
      {/* details */}
      {addDetails && (
        <div className="pp-details">
          <div className="pp-details-inner">
            <h2 id="title">{dTitle}</h2>
          </div>

          <div className="pp-projet-details">
            <div className="row">
              <div className="description">
                <h3>Résumé du projet : </h3>
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente voluptate veritatis alias voluptatibus nemo eos modi,
                  omnis dignissimos necessitatibus nisi dolorum eum porro quos
                  dolorem reprehenderit! Facilis quibusdam ex, aperiam maiores
                  necessitatibus soluta consequatur eaque magni expedita rerum
                  voluptatem natus, consectetur excepturi quam nobis et nulla
                  eveniet aspernatur error voluptates? */}
                  {resume}
                </p>
              </div>
              <div className="info">
                <h3>Informations sur le projet</h3>
                <ul>
                  <li>
                    Date : <span>{date}</span>
                  </li>
                  <li>
                    technlogies utilisées : <span>{technologie}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* separateur */}
          <div className="separator"></div>
        </div>
      )}

      {/* main */}
      <div className="pp-main">
        <div className="pp-main-inner">
          <div className="pp-project-details-btn">
            <Button
              //   type={type}
              className="btn"
              //   name={name}
              id="add"
              onClick={handleClick}
            >
              Details du projet{" "}
              <FontAwesomeIcon icon={faPlus} className="icon" />
            </Button>
          </div>
          <div
            className="pp-close"
            style={{
              color: !darkMode && "#fff",
            }}
            id="close"
            onClick={handleClick}
          >
            &times;
          </div>
          <img src={img} alt="img" className="pp-img" />
          <div className="pp-counter">1 sur 6</div>

          {/* pp pagination */}
          <div className="pp-prev">
            <FontAwesomeIcon icon={faPlay} className="icon" />
          </div>
          <div className="pp-next">
            <FontAwesomeIcon icon={faPlay} className="icon" />
          </div>
        </div>
      </div>
    </PortfolioDetailWrapper>
  );
};

export default PortfolioDetail;
