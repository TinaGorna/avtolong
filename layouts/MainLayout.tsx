import React from "react";
import clsx from "clsx";
import {InfoSection} from "../pages/sections/InfoSection/InfoSection";
import {MagazineStore} from "../pages/sections/Store/MagazineStore";


interface MainLayoutProps {
    contentFullWidth?: boolean
    className?: string
    children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({
                                                          children,
                                                          contentFullWidth,
                                                          className
                                                      }) => {
    return (
        <div className={clsx("wrapper", className)}>
            <div className="leftSide">
                <InfoSection/>
            </div>
            <div className={clsx("content", {"content-full": contentFullWidth})}>
                {children}
            </div>
            <div className="rightSide">
                <MagazineStore/>
            </div>

        </div>
    )
}