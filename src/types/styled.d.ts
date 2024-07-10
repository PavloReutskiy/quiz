import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      bg: string;
      primary: string;
      optionBg: string;
      optionSelectedBg: string;
      loaderBg: string;
      subHeading: string;
    };
  }
}
