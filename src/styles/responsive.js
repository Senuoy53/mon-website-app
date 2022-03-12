import { css } from "styled-components";

export const desktop935 = (props) => {
  return css`
    @media screen and (max-width: 935px) {
      ${props}
    }
  `;
};

export const desktop1015 = (props) => {
  return css`
    @media screen and (max-width: 1015px) {
      ${props}
    }
  `;
};

export const desktop1120 = (props) => {
  return css`
    @media screen and (max-width: 1120px) {
      ${props}
    }
  `;
};

export const desktop1254 = (props) => {
  return css`
    @media screen and (max-width: 1254px) {
      ${props}
    }
  `;
};

export const desktop1048 = (props) => {
  return css`
    @media screen and (max-width: 1048px) {
      ${props}
    }
  `;
};

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

export const mobile320 = (props) => {
  return css`
    @media only screen and (max-width: 332px) {
      ${props}
    }
  `;
};
