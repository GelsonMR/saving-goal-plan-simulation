import React from 'react';
import { shallowWithTheme, mountWithTheme } from './helpers';
import App from '../src/App';

describe('App', () => {
  it('renders', () => {
    const shallowComponent = shallowWithTheme(<App />);
    const mountComponent = mountWithTheme(<App />);

    expect(shallowComponent.exists()).toEqual(true);
    expect(mountComponent.exists()).toEqual(true);
  });
});
