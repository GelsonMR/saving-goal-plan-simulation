import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
