import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    backgroundColor: string;
  }
}

declare module '*.svg' {
  const content: string;
  export default content;
}
