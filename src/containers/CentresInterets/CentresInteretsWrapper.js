import styled from "styled-components";
import { mobile, tablette768 } from "../../styles/responsive";

const CentresInteretsWrapper = styled.section`
  padding: 0rem 5%;

  /* margin-top: 30px; */
  /* min-height: 80vh; */

  .box-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
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
      /* max-width: 300px; */
      min-height: 300px;
      padding: 10px;
      transition: all 0.5s linear;

      ${tablette768({
        width: "100%",
        // maxWidth: "0px",
        // minHeight: "30vh",
      })}

      h3 {
        margin-bottom: 30px;
        text-align: center;
      }
    }

    .box-left {
      .bars {
        margin-bottom: 15px;

        .info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;

          span {
            /* font-weight: 500; */
            /* font-size: 30px; */
          }
        }
      }
    }

    .box-right {
      display: flex;
      flex-direction: column;

      .p-icon {
        margin-right: 5px;
      }

      .h-container {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .hobbies {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          text-align: center;
          height: 90px;
          width: 90px;
          background-color: ${({ theme }) => theme.colors.PinkColor};
          border-radius: 10px;

          /* Media query */
          ${mobile({
            width: "70px",
            height: "70px",
          })}

          .h-icon {
            font-size: 25px;

            /* Media query */
            ${mobile({
              fontSize: "15px",
            })}
          }
        }
      }
    }
  }
`;

export const Line = styled.div`
  height: 5px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.Gray};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    /* width: 80%; */
    width: ${({ width }) => width};
    left: 0;
    top: 0;
    background-color: ${({ theme }) => theme.colors.PinkColor};
  }
`;

export default CentresInteretsWrapper;
