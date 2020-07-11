import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after: {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

export default GlobalStyle;
