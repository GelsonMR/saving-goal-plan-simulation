import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { Header } from './components';
import Logo from './icons/logo.svg';
import { SavingGoalScreen } from './screens';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header logo={Logo} logoAlt="Origin" />
      <SavingGoalScreen />
    </ThemeProvider>
  );
};

export default App;
