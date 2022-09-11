import React from "react";
import clsx from "clsx";

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
            <div className={clsx("content", {"content-full": contentFullWidth})}>
                {children}
            </div>
        </div>
    )
}