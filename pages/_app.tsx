import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material";
import ThemeStoreObject from "../global-theme";
import Navbar from "../elements/Navbar/navbar";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={ThemeStoreObject.theme}>
            <Navbar/>
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}

export default MyApp
