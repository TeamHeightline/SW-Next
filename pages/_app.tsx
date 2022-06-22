import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material";
import ThemeStoreObject from "../global-theme";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={ThemeStoreObject.theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
