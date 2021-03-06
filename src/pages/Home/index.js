import { useContext } from "react";
import Navbar from "../../components/Navbar";
import Experiences from "../../containers/Experiences";
import Formations from "../../containers/Formations";
import Intro from "../../containers/Intro";
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
    </div>
  );
};

export default Home;
