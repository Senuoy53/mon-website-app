import slideProject1_1 from "../../img/portfolio/project-1/slide/photo-1.png";
import smallProject1 from "../../img/portfolio/project-1/small/photo-1.png";
import slideProject2_1 from "../../img/portfolio/project-2/slide/photo-1.png";
import smallProject2 from "../../img/portfolio/project-2/small/photo-1.png";
import slideProject3_1 from "../../img/portfolio/project-3/slide/photo-1.png";
import smallProject3 from "../../img/portfolio/project-3/small/photo-1.png";
import slideProject4_1 from "../../img/portfolio/project-4/slide/photo-1.png";
import slideProject4_2 from "../../img/portfolio/project-4/slide/photo-2.png";
import slideProject4_3 from "../../img/portfolio/project-4/slide/photo-3.png";
import smallProject4 from "../../img/portfolio/project-4/small/photo-1.png";
import slideProject5_1 from "../../img/portfolio/project-5/slide/photo-1.png";
import slideProject5_2 from "../../img/portfolio/project-5/slide/photo-2.png";
import slideProject5_3 from "../../img/portfolio/project-5/slide/photo-3.png";
import slideProject5_4 from "../../img/portfolio/project-5/slide/photo-4.png";
import smallProject5 from "../../img/portfolio/project-5/small/photo-1.png";
import slideProject6_1 from "../../img/portfolio/project-6/slide/photo-1.png";
import slideProject6_2 from "../../img/portfolio/project-6/slide/photo-2.png";
import slideProject6_3 from "../../img/portfolio/project-6/slide/photo-3.png";
import slideProject6_4 from "../../img/portfolio/project-6/slide/photo-4.png";
import slideProject6_5 from "../../img/portfolio/project-6/slide/photo-5.png";
import slideProject6_6 from "../../img/portfolio/project-6/slide/photo-6.png";
import smallProject6 from "../../img/portfolio/project-6/small/photo-1.png";

// projectData
const projectData = [
  {
    img: smallProject1,
    ptitle: "Personnal portfolio 1",
  },
  {
    img: smallProject2,
    ptitle: "Personnal portfolio 2",
  },
  {
    img: smallProject3,
    ptitle: "Personnal portfolio 3",
  },
  {
    img: smallProject4,
    ptitle: "Personnal portfolio 4",
  },
  {
    img: smallProject5,
    ptitle: "Personnal portfolio 5",
  },
  {
    img: smallProject6,
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
    img: [slideProject1_1],
  },
  {
    title: "Personnal portfolio 2",
    resume:
      "resume 2 : voluptatibus nemo eos modi, omnis dignissimos necessitatibus nisi dolorum eum porro quos dolorem reprehenderit! Facilis quibusdam ex, aperiam maiores necessitatibus soluta consequatur eaque magni expedita rerum voluptatem natus, consectetur excepturi quam nobis et nulla eveniet aspernatur error voluptates?",
    date: "2021",
    technologie: "html, css ,javascript",
    img: [slideProject2_1],
  },
  {
    title: "Personnal portfolio 3",
    resume:
      "resume 3 : voluptatibus nemo eos modi, omnis dignissimos necessitatibus nisi dolorum eum porro quos dolorem reprehenderit! Facilis quibusdam ex, aperiam maiores necessitatibus soluta consequatur eaque magni expedita rerum voluptatem natus, consectetur excepturi quam nobis et nulla eveniet aspernatur error voluptates?",
    date: "2022",
    technologie: "html, css ,javascript, reactJs",
    img: [slideProject3_1],
  },
  {
    title: "Personnal portfolio 4",
    resume:
      "resume 4 : voluptatibus nemo eos modi, omnis dignissimos necessitatibus nisi dolorum eum porro quos dolorem reprehenderit! Facilis quibusdam ex, aperiam maiores necessitatibus soluta consequatur eaque magni expedita rerum voluptatem natus, consectetur excepturi quam nobis et nulla eveniet aspernatur error voluptates?",
    date: "2018",
    technologie: "html, css ,javascript, php",
    img: [slideProject4_1, slideProject4_2, slideProject4_3],
  },
  {
    title: "Personnal portfolio 5",
    resume:
      "resume 5 : voluptatibus nemo eos modi, omnis dignissimos necessitatibus nisi dolorum eum porro quos dolorem reprehenderit! Facilis quibusdam ex, aperiam maiores necessitatibus soluta consequatur eaque magni expedita rerum voluptatem natus, consectetur excepturi quam nobis et nulla eveniet aspernatur error voluptates?",
    date: "2018",
    technologie: "html, css ",
    img: [slideProject5_1, slideProject5_2, slideProject5_3, slideProject5_4],
  },
  {
    title: "Personnal portfolio 6",
    resume:
      "resume 6 : voluptatibus nemo eos modi, omnis dignissimos necessitatibus nisi dolorum eum porro quos dolorem reprehenderit! Facilis quibusdam ex, aperiam maiores necessitatibus soluta consequatur eaque magni expedita rerum voluptatem natus, consectetur excepturi quam nobis et nulla eveniet aspernatur error voluptates?",
    date: "2017",
    technologie: "html, css , bootstrap",
    img: [
      slideProject6_1,
      slideProject6_2,
      slideProject6_3,
      slideProject6_4,
      slideProject6_5,
      slideProject6_6,
    ],
  },
];

// ActionTypes
const ActionTypes = {
  SET_CLICKED: "SET_CLICKED",
};

export { projectData, detailsImageData, ActionTypes };
