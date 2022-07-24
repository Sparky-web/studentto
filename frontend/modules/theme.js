import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2897FF',
      light: '#6FBAFF',
      dark: '#006FFD',
      contrastText: '#f8f9fe',
    },
    secondary: {
      main: '#F03A47',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fe',
    },
    text: {
      primary: '#1F2024',
      secondary: '#2F3036',
      disabled: '#494A50',
      hint: '#71727A',
    },
    error: {
      main: '#FF616D',
      light: '#FFE2E5',
      dark: '#ED3241',
    },
    warning: {
      main: '#FFB37C',
      dark: '#E86339',
      light: '#FFF4E4',
    },
    info: {
      main: '#2897FF',
    },
    success: {
      main: '#3AC0A0',
      dark: '#298267',
      light: '#E7F4E8',
    },
    divider: '#D4D6DD',
  },
  typography: {
    fontFamily: 'Inter',
    h1: {
      fontSize: 24,
      fontWeight: 900,
    },
    h2: {
      fontSize: 18,
      fontWeight: 900,
    },
    h3: {
      fontSize: 16,
      fontWeight: 900,
    },
    h4: {
      fontSize: 14,
      fontWeight: 800,
    },
    h5: {
      fontSize: 12,
      fontWeight: 700,
    },
    h6: {
      fontSize: 12,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 12,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
    button: {
      fontSize: 12,
      fontWeight: 600,
    },
    caption: {
      fontSize: 10,
      fontWeight: 600,
    },
    overline: {
      fontSize: 12,
      fontWeight: 600,
    },
  },
})
