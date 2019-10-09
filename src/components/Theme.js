import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import BitterWoff2 from '../fonts/Bitter-Regular.woff2';
import RalewayWoff2 from '../fonts/Raleway-Regular.woff2';
import RalewayExtraBoldWoff2 from '../fonts/Raleway-ExtraBold.woff2';
import RalewayBlackWoff2 from '../fonts/Raleway-Black.woff2';

const raleway = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${RalewayWoff2}) format('woff2')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
const ralewayExtraBold = {
  fontFamily: 'Raleway-ExtraBold',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: `
    local('Raleway'),
    local('Raleway-ExtraBold'),
    url(${RalewayExtraBoldWoff2}) format('woff2')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
const ralewayBlack= {
  fontFamily: 'Raleway-Black',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 900,
  src: `
    local('Raleway'),
    local('Raleway-Black'),
    url(${RalewayBlackWoff2}) format('woff2')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
const bitter = {
  fontFamily: 'Bitter',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Bitter'),
    local('Bitter-Regular'),
    url(${BitterWoff2}) format('woff2')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Bitter',
      'Raleway',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h5: {
      fontFamily: "Raleway-Black",
      fontWeight: 900,
      color: "#FF0000",
      backgroundColor: "#fff",
      padding: "1em",
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [ralewayBlack],
      },
    }
  },
});

export {ThemeProvider, theme}