import styled from "styled-components";

const CentresInteretsWrapper = styled.section`
  padding: 0rem 5%;

  /* margin-top: 30px; */
  /* min-height: 80vh; */

  .heading {
    text-align: center;
    margin: 0 6rem;
    font-size: 30px;
    padding: 16px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.PinkColor};
    color: ${({ theme }) => theme.colors.White};

    span {
      color: ${({ theme }) => theme.colors.PinkColor};
    }
  }

  .box-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* flex-wrap: wrap; */
    padding: 16px 0;
    /* padding-left: 20px; */

    .box {
      flex-basis: 50%;
      /* max-width: 300px; */
      min-height: 300px;
      padding: 10px;
      transition: all 0.5s linear;

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

          .h-icon {
            font-size: 25px;
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
