import 'styled-components';

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    backgroundColor: string;
  }
}