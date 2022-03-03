import { css } from "styled-components";

export const tablette768 = (props) => {
  return css`
    @media screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
