import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { Header } from './components';
import { SavingGoalScreen } from './screens';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <SavingGoalScreen />
    </ThemeProvider>
  );
};

export default App;

