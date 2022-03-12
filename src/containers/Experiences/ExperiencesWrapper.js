import styled from "styled-components";
import { tablette768 } from "../../styles/responsive";

const ExperiencesWrapper = styled.section`
  padding: 0rem 5%;
  /* margin-top: 30px; */
  /* min-height: 80vh; */

  .box-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 16px 0;

    /* Media Query */
    ${tablette768({
      flexDirection: "column",
    })}
  }
`;

export default ExperiencesWrapper;
