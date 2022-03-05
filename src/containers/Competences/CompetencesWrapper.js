import styled from "styled-components";

const CompetencesWrapper = styled.section`
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
    justify-content: space-between;
    /* flex-wrap: wrap; */
    padding: 16px 0;
    /* padding-left: 20px; */

    .box {
      flex-basis: 50%;
      max-width: 300px;
      min-height: 400px;
      padding: 10px;
      transition: all 0.5s linear;

      &:hover {
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.PinkColor};
      }

      &:hover .icon {
        background-color: ${({ theme }) => theme.colors.White};
        color: ${({ theme }) => theme.colors.PinkColor};
      }

      &:hover header {
        color: ${({ theme }) => theme.colors.White};
      }
    }
  }
`;

export default CompetencesWrapper;
