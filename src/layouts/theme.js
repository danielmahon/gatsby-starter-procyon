import { injectGlobal } from 'styled-components';

// Global styles
injectGlobal`
  html, body {
    height: 100%;
    color: #212121;
    background-color: #fafafa;
  }
  img {
    margin: 0;
  }
`;

// Theme variables that will pass to styled components
export default {
  colors: {
    white: '#ffffff',
    black: '#212121',
    background: '#fafafa',
    backgroundDarker: '#e2e2e2',
  },
};
