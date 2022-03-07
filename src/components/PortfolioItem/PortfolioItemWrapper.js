import styled from "styled-components";

const PortfolioItemWrapper = styled.div`
  flex-basis: 25%;
  max-width: 25%;
  margin: 20px 10px;
  border: 2px solid #fff;
  border-radius: 10px 10px 0px 0px;

  .box-inner {
    max-height: 32vh;
    /* min-height: 32vh; */
    overflow: hidden;

    &:hover {
      .box-img .view-project {
        transform: translateY(0px);
        display: block;
      }

      .box-img img {
        transform: translateY(-25px);
      }
    }

    .b-browser {
      height: 20px;
      background-color: #fff;
      display: flex;
      align-items: center;
      position: sticky;
      z-index: 2;

      .b-circle {
        width: 6px;
        height: 6px;
        background-color: ${({ theme }) => theme.colors.Gray};
        border-radius: 50%;
        margin: 3px;
      }
    }

    .box-img {
      position: relative;

      img {
        height: 20vh;
        width: 100%;
        transition: all 0.3s ease;
      }

      .view-project {
        display: none;
        color: ${({ theme }) => theme.colors.PinkColor};
        transition: all 0.3s ease;
        font-size: 14px;
        position: absolute;
        left: 0;
        bottom: -4px;
        transform: translateY(-5px);
        cursor: pointer;
      }
    }

    .box-title,
    .view-project {
      margin: 10px 10px;
    }
  }
`;

export default PortfolioItemWrapper;
