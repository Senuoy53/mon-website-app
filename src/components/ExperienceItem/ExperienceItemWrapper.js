import styled from "styled-components";
import {
  desktop1015,
  desktop1120,
  desktop1254,
  tablette768,
} from "../../styles/responsive";

const ExperienceItemWrapper = styled.div`
  flex-basis: 25%;
  min-height: 30vh;
  margin: 2rem 1rem;
  padding-left: 2rem;
  border-left: 0.2rem solid ${({ theme }) => theme.colors.white};
  position: relative;

  /* Media Query */
  ${desktop1015({
    flexBasis: "33.33%",
  })}

  /* Media Query */
  ${tablette768({
    width: "100%",
    minHeight: "0vh",
  })}

  .date {
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.BlackBgColor};
    color: ${({ theme }) => theme.colors.White};
    border-radius: 5rem;
    padding: 0.5rem 1rem;

    /* Media Query */
    ${desktop1254({
      fontSize: "12px",
    })}

    /* Media Query */
    ${desktop1120({
      fontSize: "10px",
    })}

    /* Media Query */
    ${desktop1015({
      // fontSize: "12px",
    })}
  }

  h3 {
    font-size: 1rem;
    /* color: ${({ theme }) => theme.colors.White}; */
    padding-top: 1.5rem;
  }

  p {
    /* font-size: 1rem; */
    color: ${({ theme }) => theme.colors.WhitePgColor};
    padding: 0.5rem 0;
  }

  .p-icon {
    margin-right: 5px;
  }

  .icon {
    position: absolute;
    top: -0.8rem;
    left: -1.4rem;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    line-height: 5rem;
    /* text-align: center; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.White};
    background-color: ${({ theme }) => theme.colors.PinkColor};
  }
`;

export default ExperienceItemWrapper;
