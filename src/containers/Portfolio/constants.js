import project1 from "../../img/portfolio/project-1.png";
import project2 from "../../img/portfolio/project-2.png";
import project3 from "../../img/portfolio/project-3.png";
import project4 from "../../img/portfolio/project-4.png";
import project5 from "../../img/portfolio/project-5.png";
import project6 from "../../img/portfolio/project-6.png";

// projectData
const projectData = [
  {
    img: project1,
    ptitle: "Personnal portfolio 1",
  },
  {
    img: project2,
    ptitle: "Personnal portfolio 2",
  },
  {
    img: project3,
    ptitle: "Personnal portfolio 3",
  },
  {
    img: project4,
    ptitle: "Personnal portfolio 4",
  },
  {
    img: project5,
    ptitle: "Personnal portfolio 5",
  },
  {
    img: project6,
    ptitle: "Personnal portfolio 6",
  },
];

// detailsImageData
const detailsImageData = [
  {
    title: "Personnal portfolio 1",
    resume:
      "resume 1 : voluptatibus nemo eos modi, omnis dignissimos necessitatibus nisi dolorum eum porro quos dolorem reprehenderit! Facilis quibusdam ex, aperiam maiores necessitatibus soluta consequatur eaque magni expedita rerum voluptatem natus, consectetur excepturi quam nobis et nulla eveniet aspernatur error voluptates?",
    date: "2020",
    technologie: "html, css ,javascript",
    img: project1,
  },
  {
    title: "Personnal portfolio 2",
    resume:
      "resume 2 : voluptatibus nemo eos modi, omnis dignissimos necessitatibus nisi dolorum eum porro quos dolorem reprehenderit! Facilis quibusdam ex, aperiam maiores necessitatibus soluta consequatur eaque magni expedita rerum voluptatem natus, consectetur excepturi quam nobis et nulla eveniet aspernatur error voluptates?",
    date: "2021",
    technologie: "html, css ,javascript",
    img: project2,
  },
  {
    title: "Personnal portfolio 3",
    resume:
      "resume 3 : voluptatibus nemo eos modi, omnis dignissimos necessitatibus nisi dolorum eum porro quos dolorem reprehenderit! Facilis quibusdam ex, aperiam maiores necessitatibus soluta consequatur eaque magni expedita rerum voluptatem natus, consectetur excepturi quam nobis et nulla eveniet aspernatur error voluptates?",
    date: "2022",
    technologie: "html, css ,javascript, reactJs",
    img: project3,
  },
  {
    title: "Personnal portfolio 4",
    resume:
      "resume 4 : voluptatibus nemo eos modi, omnis dignissimos necessitatibus nisi dolorum eum porro quos dolorem reprehenderit! Facilis quibusdam ex, aperiam maiores necessitatibus soluta consequatur eaque magni expedita rerum voluptatem natus, consectetur excepturi quam nobis et nulla eveniet aspernatur error voluptates?",
    date: "2018",
    technologie: "html, css ,javascript, php",
    img: project4,
  },
  {
    title: "Personnal portfolio 5",
    resume:
      "resume 5 : voluptatibus nemo eos modi, omnis dignissimos necessitatibus nisi dolorum eum porro quos dolorem reprehenderit! Facilis quibusdam ex, aperiam maiores necessitatibus soluta consequatur eaque magni expedita rerum voluptatem natus, consectetur excepturi quam nobis et nulla eveniet aspernatur error voluptates?",
    date: "2018",
    technologie: "html, css ",
    img: project5,
  },
  {
    title: "Personnal portfolio 6",
    resume:
      "resume 6 : voluptatibus nemo eos modi, omnis dignissimos necessitatibus nisi dolorum eum porro quos dolorem reprehenderit! Facilis quibusdam ex, aperiam maiores necessitatibus soluta consequatur eaque magni expedita rerum voluptatem natus, consectetur excepturi quam nobis et nulla eveniet aspernatur error voluptates?",
    date: "2017",
    technologie: "html, css , bootstrap",
    img: project6,
  },
];

// ActionTypes
const ActionTypes = {
  SET_CLICKED: "SET_CLICKED",
};

export { projectData, detailsImageData, ActionTypes };
