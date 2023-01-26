import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    outline: unset;
    list-style: none;
    font-style: normal;
    font-family: 'Noto Sans', sans-serif;
  }
  button,
  label {
    cursor: pointer;
    background-color: transparent;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
