import '../styles/globals.css'
import { AppProvider } from '../context/AppContext';
import { createTheme, ThemeProvider } from '@mui/system';
import { theme } from "../modules/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp
