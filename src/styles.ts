import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #131316;
    color: #c4c4cc;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }
`;