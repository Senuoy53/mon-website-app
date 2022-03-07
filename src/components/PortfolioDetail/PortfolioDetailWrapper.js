import styled from "styled-components";

const PortfolioDetailWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  /* overflow-y: auto;
  opacity: 0;
  visibility: hidden; */

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #f3f3f3;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff4a57;
  }

  /* ******** details ******** */
  .pp-details {
    max-width: 1350px;
    width: calc(92% + 30px);
    margin: auto;
    padding: 0px 10px;
    /* max-height: 0;
    overflow: hidden;
    opacity: 0; */
  }

  .pp-details-inner {
    /* padding-bottom: 30px; */

    h2 {
      padding: 50px 15px;
      font-weight: 800;
    }
  }

  .row {
    /* background-color: red; */
    display: flex;
    /* align-items: center; */
    gap: 5%;

    .description {
      /* flex: 1; */
      flex-basis: 65%;
      padding: 0 15px;

      p {
        line-height: 1.3;
        color: ${({ theme }) => theme.colors.Gray};
        font-size: 15px;
      }
    }

    .info {
      /* flex: 1; */
      flex-basis: 35%;
      padding: 0 15px;

      ul {
        list-style: none;
        font-size: 15px;

        li {
          margin-bottom: 5px;

          span {
            color: ${({ theme }) => theme.colors.Gray};
          }
        }
      }
    }

    h3 {
      margin-bottom: 10px;
      font-weight: 500;
    }
  }

  /* separator */
  .separator {
    height: 1px;
    width: 100%;
    display: block;
    background-color: ${({ theme }) => theme.colors.PinkColor};
    margin-top: 10px;
  }

  /* ******** main ******** */

  .pp-img {
    /* max-width: 300px;
    max-height: 250px; */
    max-width: 100%;
    width: auto;
    height: auto;
    padding: 10px;
    border-radius: 5px;
  }

  .pp-main {
    min-height: 100vh;

    /* max-width: 1350px; */
    width: 92%;

    margin: auto;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    position: relative;
  }

  .pp-main-inner {
    padding: 70px 0 50px;
    position: relative;
  }

  .pp-prev,
  .pp-next {
    position: fixed;
    top: 50%;
    height: 40px;
    width: 40px;
    font-size: 20px;
    cursor: pointer;
    z-index: 1010;
    transition: all 0.3s ease;
  }

  .pp-prev .icon,
  .pp-next .icon {
    color: ${({ theme }) => theme.colors.PinkColor};
    opacity: 0.5;
  }

  .pp-prev .icon:hover,
  .pp-next .icon:hover {
    color: ${({ theme }) => theme.colors.PinkColor};
    opacity: 1;
  }

  .pp-prev {
    transform: translateY(-50%);
    left: 20px;

    .icon {
      transform: rotate(180deg);
    }
  }

  .pp-next {
    transform: translateY(-50%);
    right: 10px;
  }

  .btn {
    position: absolute;
    left: 10px;
    top: 15px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
      margin-left: 5px;
    }
  }

  .pp-close {
    position: absolute;
    right: 10px;
    height: 40px;
    width: 40px;
    top: 15px;
    background-color: ${({ theme }) => theme.colors.PinkColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.Gray};
    }
  }

  .pp-counter {
    position: absolute;
    right: 10px;
    height: 40px;
    line-height: 40px;
    bottom: 5px;
    color: ${({ theme }) => theme.colors.PinkColor};
  }
`;

export default PortfolioDetailWrapper;
