import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

export default GlobalStyle;
