import type {AppProps} from 'next/app'
import {CssBaseline, ThemeProvider} from "@mui/material";
import ThemeStoreObject from "../global-theme";
import Navbar from "../elements/Navbar/navbar";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={ThemeStoreObject.theme}>
            <CssBaseline/>
            <Navbar/>
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}

export default MyApp
