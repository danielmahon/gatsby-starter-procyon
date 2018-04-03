import { injectGlobal } from 'styled-components';

// Global styles
injectGlobal`
  html, body {
    height: 100%;
  }
  img {
    margin: 0;
  }
`;

// Theme variables that will pass to styled components
export default {
  colors: {
    white: '#ffffff',
    black: '#000000',
    background: '#fafafa',
    backgroundDarker: '#e2e2e2',
  },
};
