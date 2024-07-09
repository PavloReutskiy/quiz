import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&family=Niconne&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  html {
    font-family: "Albert Sans", sans-serif;
    font-style: normal;
    font-size: 17px;
    font-weight: 500;
    font-optical-sizing: auto;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.white};
  }

  button {
    border: none;
    outline: none;
    background: none;
    font: inherit;
    cursor: pointer;
    line-height: 0;
  }

  ul, ol {
    list-style: none;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, textarea, select {
    border: none;
    outline: none;
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
    font: inherit;
  }
`;
export default GlobalStyles;
