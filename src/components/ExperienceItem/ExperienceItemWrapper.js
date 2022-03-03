import styled from "styled-components";

const ExperienceItemWrapper = styled.div`
  flex-basis: 25%;
  min-height: 30vh;
  margin: 2rem 1rem;
  padding-left: 2rem;
  border-left: 0.2rem solid ${({ theme }) => theme.colors.white};
  position: relative;

  span {
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.BlackBgColor};
    color: ${({ theme }) => theme.colors.White};
    border-radius: 5rem;
    padding: 0.5rem 1rem;
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
