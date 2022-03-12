import styled from "styled-components";
import {
  desktop935,
  mobile,
  mobile320,
  tablette768,
} from "../../styles/responsive";

const IntroWrapper = styled.div`
  padding: 1.5rem 5%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: calc(100vh - 50px);

  ${tablette768({
    padding: "0rem 2%",
    paddingTop: "20vh",
    flexDirection: "column",
  })}

  .intro-left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Media Query */
    ${tablette768({
      marginBottom: "100px",
    })}

    ${mobile320({
      marginBottom: "70vh",
    })}
  }

  .i-left-wrapper {
    /* padding: 50px; */

    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .i-intro {
    font-size: clamp(9px, 20px, 30px);
    font-weight: 300;
  }

  .i-name {
    font-size: clamp(20px, 40px, 60px);
    /* margin-bottom: 10px; */
  }

  .i-title {
    /* padding-top: 50px; */
    height: 30px;
    overflow: hidden;

    ${tablette768({
      display: "none",
    })};
  }

  .i-title-wrapper {
    height: 100%;
    animation: move 10s ease-in-out infinite alternate;
  }

  .i-desc {
    margin-top: 10px;
  }

  @keyframes move {
    100% {
      transform: translateY(-40px);
    }
  }

  .i-title-item {
    height: 30px;
    font-size: 30px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.PinkColor};
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .Buttons {
    display: flex;
    justify-content: space-around;

    /* Media Query */
    ${mobile320({
      marginTop: "50px",
    })}

    ${mobile({
      flexDirection: "column",
      alignItems: "center",
    })}
  }

  .btn {
    margin-top: 20px;
    width: 200px;

    /* Media Query */
    ${desktop935({
      fontSize: "14px",
      width: "160px",
    })}

    /* Media Query */
    ${mobile({
      fontSize: "12px",
    })}
  }

  .intro-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
  }

  .i-box-img {
    position: relative;
  }

  .i-box-img::after {
    content: "";
    position: absolute;
    height: 80px;
    width: 80px;
    border-bottom: 10px solid ${({ theme }) => theme.colors.PinkColor};
    border-right: 10px solid ${({ theme }) => theme.colors.PinkColor};
    right: -50px;
    bottom: -40px;
  }

  .i-box-img::before {
    content: "";
    position: absolute;
    height: 80px;
    width: 80px;
    border-top: 10px solid ${({ theme }) => theme.colors.PinkColor};
    border-left: 10px solid ${({ theme }) => theme.colors.PinkColor};
    left: -50px;
    top: -40px;
  }

  .i-img {
    height: 400px;

    ${tablette768({
      height: "300px",
    })}

    /* Media Query */
    ${desktop935({
      height: "250px",
    })}

    /* Media Query */
    ${mobile({
      height: "200px",
    })}
  }
`;

export default IntroWrapper;
