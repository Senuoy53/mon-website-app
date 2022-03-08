import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    
}

 *::selection {
        background-color: #ff4a57;
      }


/* stop scrolling for the main page */
body.stop-scrolling {
    overflow-y: hidden ;

      }

html::-webkit-scrollbar {
 width: 0.8rem;
}

html::-webkit-scrollbar-track {
 background-color: #f3f3f3;
}


html::-webkit-scrollbar-thumb {
 background-color: #ff4a57;
}

`;

// Global colors
export const theme = {
  colors: {
    PinkColor: "#ff4a57",
    Black: "#000",
    BlackBgColor: "#222",
    BlackBgColor_2: "#333",
    White: "#fff",
    Gray: "#666",
    WhitePgColor: "#eee",
    GrayBgColor: "#f3f3f3",
    GreenBgColor: "#55b566",

    Red: "#d8000c",
    GreenTel: "#059581",
    BleuMessage: "#7194B5",
    RedAddress: "#B16157",
  },
};

export default GlobalStyle;
