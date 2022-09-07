import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {theme} from "../theme";
import "../styles/globals.css"
import Head from "next/head";
import {AppProps} from "next/app";
import {HeaderSection} from "./sections/HeaderSection/HeaderSection";
import {InfoSection} from "./sections/InfoSection/InfoSection";
import {MagazineStore} from "./sections/Store/MagazineStore";

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Avtolong</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"/>
            </Head>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <HeaderSection/>
                <InfoSection/>
                <MagazineStore/>
                {/*<Component {...pageProps}/>*/}
            </MuiThemeProvider>
        </>
    )
}

export default App
