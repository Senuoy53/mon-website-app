import styled from "styled-components";
import { mobile320, tablette768 } from "../../styles/responsive";

const FormationsWrapper = styled.section`
  padding: 0rem 5%;
  margin-top: 50px;

  min-height: 90vh;

  /* Media Query */
  ${mobile320({
    marginTop: "80px",
  })}

  ${tablette768({
    paddingTop: "20vh",
    // padding: "0rem 1%",
  })}

  .box-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 16px 0;

    /* Media Query */
    ${tablette768({
      flexDirection: "column",
      padding: "1rem 2%",
    })}
  }
`;

export default FormationsWrapper;
