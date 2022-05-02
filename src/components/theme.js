import { createTheme } from '@nextui-org/react';

const theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      // generic colors
      white: '#FAFFFE',
      black: '#001917',
      //semantic colors
      green100: '#EBFFFD',
      green200: '#B9FEF7',
      green300: '#86FDF1',
      green400: '#54FCEB',
      green500: '#22FCE5',
      green600: '#04E7D0',
      green700: '#03B5A3',
      green800: '#028375',
      green900: '#001E1B',

      // brand colors
      primaryLight: '#0AB68B',
      primary: '#028174',
      primaryDark: '#001E1B',
      primaryShadow: '#B9FEF7',

      secondaryLight: '#0DE8B1',
      secondary: '#0AB68B',
      secondaryDark: '#078767',
      secondaryShadow: '#C5FCEE',

      successLight: '#A1F9AC',
      success: '#17c964',
      successDark: '#10AC63',
      successShadow: '#dafee8',

      warningLight: '#FEE7A6',
      warning: '$#f5a623',
      warningDark: '#D28519',
      warningShadow: '#fce6c7',

      errorLight: '#FDA0A5',
      error: '#f21361',
      errorDark: '#D00D65',
      errorShadow: '#fbc4d5',
    },
    fonts: {
      sans: "-apple-system, 'Poppins', sans-serif",
    },
    fontSizes: {
      tiny: '.75rem',
      xs: '0.875rem',
      base: '1.125rem',
      sm: '1.25rem',
      md: '1.5rem',
      lg: '2.25rem',
      xl: '3rem',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      xs: 1,
      sm: 1.25,
      md: 1.5,
      lg: 1.625,
      xl: 1.75,
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    radii: {
      xs: '8px',
      sm: '12px',
      md: '16px',
      base: '16px',
      lg: '16px', // preferred value by NextUI components
      xl: '20px',
      squared: '33%',
      rounded: '50%',
      pill: '9999px',
    },
    borderWeights: {
      light: '1px',
      normal: '2px',
      bold: '3px',
      extrabold: '4px',
      black: '5px',
    },
    spacing: {
      0: '0rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.375rem',
      xl: '2.25rem',
      px: '1px',
      1: '0.125rem',
      2: '0.25rem',
      3: '0.375rem',
      4: '0.5rem',
      5: '0.625rem',
      6: '0.75rem',
      7: '0.875rem',
      8: '1rem',
      9: '1.25rem',
      10: '1.5rem',
      11: '1.75rem',
      12: '2rem',
      13: '2.25rem',
      14: '2.5rem',
      15: '2.75rem',
      16: '3rem',
      17: '3.5rem',
      18: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    breakpoints: {
      xs: '650px',
      sm: '960px',
      md: '1280px',
      lg: '1400px',
      xl: '1920px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      10: '1000',
      max: '9999',
    },
    shadows: {
      xs: '-4px 0 4px rgb(0 0 0 / 5%);',
      sm: '0 5px 20px -5px rgba(0, 0, 0, 0.1)',
      md: '0 8px 30px rgba(0, 0, 0, 0.15)',
      lg: '0 30px 60px rgba(0, 0, 0, 0.15)',
      xl: '0 40px 80px rgba(0, 0, 0, 0.25)',
    },
  },
});

export default theme;
