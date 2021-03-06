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
    White: "#fff",
    WhitePgColor: "#eee",
    GrayBgColor: "#f3f3f3",
    GreenBgColor: "#55b566",
    Gray: "#666",
    Red: "#d8000c",
    GreenTel: "#059581",
    BleuMessage: "#7194B5",
    RedAddress: "#B16157",
  },
};

export default GlobalStyle;
