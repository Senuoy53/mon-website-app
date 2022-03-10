import { useContext } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CentresInterets from "../../containers/CentresInterets";
import Competences from "../../containers/Competences";
import Contact from "../../containers/Contact";
import Experiences from "../../containers/Experiences";
import Formations from "../../containers/Formations";
import Intro from "../../containers/Intro";
import Portfolio from "../../containers/Portfolio";
import { ThemeContext } from "../../styles/context";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode && "white",
      }}
    >
      <Navbar />
      <Intro />
      <Formations />
      <Experiences />
      <Competences />
      <CentresInterets />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
