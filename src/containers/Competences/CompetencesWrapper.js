import styled from "styled-components";
import { tablette768 } from "../../styles/responsive";
import { theme } from "../../styles/global-styles";

const CompetencesWrapper = styled.section`
  padding: 0rem 5%;

  /* margin-top: 30px; */
  /* min-height: 80vh; */

  .box-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* flex-wrap: wrap; */
    padding: 16px 0;
    /* padding-left: 20px; */

    /* Media Query */
    ${tablette768({
      flexDirection: "column",
      padding: "1rem 2%",
    })}

    .box {
      flex-basis: 50%;

      /* max-width: 300px;
      min-height: 400px; */
      max-width: 100vw;
      min-height: 70vh;
      padding: 10px;
      transition: all 0.5s linear;

      ${tablette768({
        width: "100%",
        // maxWidth: "0px",
        minHeight: "30vh",
      })}

      &:hover {
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.PinkColor};

        ${tablette768({
          backgroundColor: "transparent",
        })}
      }

      &:hover .icon {
        background-color: ${({ theme }) => theme.colors.White};
        color: ${({ theme }) => theme.colors.PinkColor};
        ${tablette768({
          backgroundColor: theme.colors.PinkColor,
          color: theme.colors.White,
        })}
      }

      &:hover header {
        color: ${({ theme }) => theme.colors.White};
        ${tablette768({
          color: theme.colors.PinkColor,
        })}
      }
    }
  }
`;

export default CompetencesWrapper;
