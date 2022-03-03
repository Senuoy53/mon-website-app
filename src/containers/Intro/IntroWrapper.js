import styled from "styled-components";

const IntroWrapper = styled.div`
  padding: 1.5rem 5%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: calc(100vh - 50px);

  .intro-left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .i-left-wrapper {
    /* padding: 50px; */

    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .i-intro {
    font-size: 30px;
    font-weight: 300;
  }

  .i-name {
    font-size: 60px;
    /* margin-bottom: 10px; */
  }

  .i-title {
    /* padding-top: 50px; */
    height: 30px;
    overflow: hidden;
  }

  .i-title-wrapper {
    height: 100%;
    animation: move 10s ease-in-out infinite alternate;
  }

  .i-desc {
    /* margin-top: 10px; */
  }

  @keyframes move {
    /* 25% {
      transform: translateY(-30px);
    }
    50% {
      transform: translateY(-60px);
    }
    75% {
      transform: translateY(-120px);
    }
    100% {
      transform: translateY(-180px);
    } */

    /* 50% {
      transform: translateY(-30px);
    } */
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
  }

  .btn {
    margin-top: 20px;
    width: 200px;
    border-radius: 30px;
    padding: 10px 10px;
    text-align: center;
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
    /* width: 50%; */
  }
`;

export default IntroWrapper;
