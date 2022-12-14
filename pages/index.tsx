import * as React from "react"

import {MainLayout} from "../layouts/MainLayout";
import {CssBaseline, Divider} from "@material-ui/core";
import {HeaderSection} from "./sections/HeaderSection/HeaderSection";
import {InfoSection} from "./sections/InfoSection/InfoSection";
import {MagazineStore} from "./sections/Store/MagazineStore";
import {ContactSection} from "./sections/ContactSection/ContactSection";
import {Footer} from "./sections/FooterSection/Footer";


export default function Home() {

    return (
        <MainLayout contentFullWidth>
            <CssBaseline/>
            <HeaderSection/>
            <InfoSection/>
            <MagazineStore/>
            <ContactSection/>
            <Footer/>
        </MainLayout>
    )
}