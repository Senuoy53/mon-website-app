import slideProject1_1 from "../../img/portfolio/project-1/slide/photo-1.png";
import smallProject1 from "../../img/portfolio/project-1/small/photo-1.png";
import slideProject2_1 from "../../img/portfolio/project-2/slide/photo-1.png";
import smallProject2 from "../../img/portfolio/project-2/small/photo-1.png";
import slideProject3_1 from "../../img/portfolio/project-3/slide/photo-1.png";
import slideProject3_2 from "../../img/portfolio/project-3/slide/photo-2.png";
import slideProject3_3 from "../../img/portfolio/project-3/slide/photo-3.png";
import slideProject3_4 from "../../img/portfolio/project-3/slide/photo-4.png";
import slideProject3_5 from "../../img/portfolio/project-3/slide/photo-5.png";
import smallProject3 from "../../img/portfolio/project-3/small/photo-1.png";
import slideProject4_1 from "../../img/portfolio/project-4/slide/photo-1.png";
import smallProject4 from "../../img/portfolio/project-4/small/photo-1.png";
import slideProject5_1 from "../../img/portfolio/project-5/slide/photo-1.png";
import slideProject5_2 from "../../img/portfolio/project-5/slide/photo-2.png";
import slideProject5_3 from "../../img/portfolio/project-5/slide/photo-3.png";
import smallProject5 from "../../img/portfolio/project-5/small/photo-1.png";
import slideProject6_1 from "../../img/portfolio/project-6/slide/photo-1.png";
import slideProject6_2 from "../../img/portfolio/project-6/slide/photo-2.png";
import slideProject6_3 from "../../img/portfolio/project-6/slide/photo-3.png";
import slideProject6_4 from "../../img/portfolio/project-6/slide/photo-4.png";
import slideProject6_5 from "../../img/portfolio/project-6/slide/photo-5.png";
import smallProject6 from "../../img/portfolio/project-6/small/photo-1.png";

// projectData
const projectData = [
  {
    img: smallProject1,
    ptitle: "Business WebSite",
  },
  {
    img: smallProject2,
    ptitle: "Portfolio",
  },
  {
    img: smallProject3,
    ptitle: "Cup of tea",
  },
  {
    img: smallProject4,
    ptitle: "Todo app",
  },
  {
    img: smallProject5,
    ptitle: "Chat app",
  },
  {
    img: smallProject6,
    ptitle: "Doc Contact",
  },
];

// detailsImageData
const detailsImageData = [
  {
    title: "Business WebSite",
    resume: "Business WebSite avec image de diapositive en plein écran",
    date: "2021",
    technologie: "html, css , javascript, Bootsrtrap",
    img: [slideProject1_1],
  },
  {
    title: "Portfolio",
    resume: "Modèle d’un site web de type portfolio.",
    date: "2021",
    technologie: "html, css , javascript",
    img: [slideProject2_1],
  },
  {
    title: "Cup of tea",
    resume: "C’est un site web de vente des différents types de thés.",
    date: "2021",
    technologie: "html, css , javascript",
    img: [
      slideProject3_1,
      slideProject3_2,
      slideProject3_3,
      slideProject3_4,
      slideProject3_5,
    ],
  },
  {
    title: "Todo app",
    resume:
      "Cette application permet d’ajouter des données à une liste. Ces données sont enregistrées dans MongoDB en se basant sur ExpressJS.",
    date: "2021",
    technologie:
      "html, css , Bootstrap, ReactJS, React Thunk, ExpressJs, MongoDB",
    img: [slideProject4_1],
  },
  {
    title: "Chat app",
    resume:
      "C’est une application de chat qui permet d’envoyer des messages entre amis, chaque utilisateur à un compte unique, les messages sont enregistrées dans MongoDB en se basant sur ExpressJS.",
    date: "2022",
    technologie:
      "html, Styled components, ReactJS, Typescript, React Saga, ExpressJS, Firestore, Firebase auth ",
    img: [slideProject5_1, slideProject5_2, slideProject5_3],
  },
  {
    title: "Doc Contact",
    resume:
      "L'object de ce site est de permettre aux utilisateurs de rechercher les médecins les plus proches de leurs localisations tout en sélectionnant la spécialité du médecin et/ou la ville. Chaque médecin doit créer un compte unique afin d’ajouter ses informations qui seront affichées aux utilisateurs. Toutes ces données sont enregistrées dans Firestore et Firbase storage. ",
    date: "2022",
    technologie:
      "html, Styled components , ReactJS, Typescript,  React Thunk, Firestore, Firebase auth, Firebase Storage",
    img: [
      slideProject6_1,
      slideProject6_2,
      slideProject6_3,
      slideProject6_4,
      slideProject6_5,
    ],
  },
];

// ActionTypes
const ActionTypes = {
  SET_CLICKED: "SET_CLICKED",
};

export { projectData, detailsImageData, ActionTypes };
