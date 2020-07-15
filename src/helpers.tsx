import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount, shallow } from 'enzyme';

const themeMock = {
  fontFamily: 'sans-serif',
  backgroundColor: 'white'
};

interface Props {
  children?: React.ReactNode;
}

const ThemeProviderWrapper: React.FunctionComponent<Props> = (props: Props) => (
  <ThemeProvider theme={themeMock}>{props.children}</ThemeProvider>
);

export const shallowWithTheme = (tree: JSX.Element) =>
  shallow(tree, {
    wrappingComponent: ThemeProviderWrapper
  });

export const mountWithTheme = (tree: JSX.Element) =>
  mount(tree, {
    wrappingComponent: ThemeProviderWrapper
  });
