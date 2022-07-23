import '../styles/globals.css'
import { Html } from 'next/document'
import Head from "next/head";
import { AppProvider } from '../context/AppContext';

function MyApp({ Component, pageProps }) {
  return <AppProvider><Component {...pageProps} /></AppProvider>
}

export default MyApp
