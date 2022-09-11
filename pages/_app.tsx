import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {theme} from "../theme";
import "../styles/globals.css"
import Head from "next/head";
import {AppProps} from "next/app";
import Home from "./index";

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Avtolong</title>
            </Head>
            <MuiThemeProvider theme={theme}>
                <Home/>
            </MuiThemeProvider>
        </>
    )
}

export default App
