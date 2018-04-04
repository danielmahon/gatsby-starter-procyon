// Setup base Material-UI theme
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';

const headlineFont = `Merriweather, Georgia, serif`;
const bodyFont = `"Open Sans", Roboto, "Helvetica Neue", Arial, sans-serif`;

export default createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    error: red,
  },
  typography: {
    fontFamily: bodyFont,
    fontSize: 14, // default
    // color: grey[500],
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    display1: {
      fontFamily: headlineFont,
      color: grey[900],
      marginBottom: '1rem',
    },
    display2: { fontFamily: headlineFont, color: grey[900] },
    display3: { fontFamily: headlineFont, color: grey[900] },
    display4: { fontFamily: headlineFont, color: grey[900] },
    headline: { fontFamily: headlineFont, color: grey[900] },
    title: { fontFamily: headlineFont, color: grey[900], fontWeight: 400 },
    body1: {
      fontFamily: bodyFont,
      color: grey[700],
      fontWeight: 400,
    },
  },
});
