import PortfolioDetailWrapper from "./PortfolioDetailWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlay, faMinus } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import { useContext } from "react";
import { ThemeContext } from "../../styles/context";
import { useDispatch } from "react-redux";
import { setClicked } from "../../containers/Portfolio/actions";
import { useState } from "react";
import SlideImage from "../SlideImage";
import { useEffect } from "react";

const PortfolioDetail = ({ resume, date, technologie, img, dTitle }) => {
  // Context API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // dispatcher
  const dispatch = useDispatch();

  // state
  const [addDetails, setAddDetails] = useState(false);
  // loading
  const [loading, setLoading] = useState(false);
  // slide index
  const [slideIndex, setSlideIndex] = useState(0);
  // scroll hight
  const [scrollHeight, setScrollHeight] = useState();

  // handleClick
  const handleClick = (e) => {
    e.preventDefault();

    switch (e.target.id) {
      case "close":
        dispatch(setClicked(false));

        // allow scrolling  for the main page
        document.body.classList.remove("stop-scrolling");

        break;
      case "add":
        setAddDetails(!addDetails);

        break;
      default:
        break;
    }
  };

  // useeffect for loading
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // next btn
  const nextBtn = () => {
    if (slideIndex === img.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
    // call the slide show
    SlideShow();
  };

  // prev btn
  const prevBtn = () => {
    if (slideIndex === 0) {
      setSlideIndex(img.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
    // call the slide show
    SlideShow();
  };

  // SlideShow
  const SlideShow = () => {
    return <SlideImage img={img[slideIndex]} />;
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
                <p>{resume}</p>
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
              Details du projet
              {addDetails ? (
                <FontAwesomeIcon icon={faMinus} className="icon" />
              ) : (
                <FontAwesomeIcon icon={faPlus} className="icon" />
              )}
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

          {/* call the function to  show the the details images  */}
          {SlideShow()}

          <div className="pp-counter">
            {slideIndex + 1} sur {img.length}
          </div>

          {img.length > 1 && (
            <>
              <div className="pp-prev">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="icon"
                  onClick={prevBtn}
                />
              </div>
              <div className="pp-next">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="icon"
                  onClick={nextBtn}
                />
              </div>
            </>
          )}

          {loading && (
            <div className="pp-loader">
              <div></div>
            </div>
          )}
        </div>
      </div>
    </PortfolioDetailWrapper>
  );
};

export default PortfolioDetail;
