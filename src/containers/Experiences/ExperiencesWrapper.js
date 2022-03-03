import styled from "styled-components";

const ExperiencesWrapper = styled.section`
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
    flex-wrap: wrap;
    padding: 16px 0;
    /* padding-left: 20px; */
  }
`;

export default ExperiencesWrapper;
