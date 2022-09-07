import React from "react";
import {Paper} from "@mui/material";
import styles from "../InfoSection/InfoSectoin.module.scss";
import {StoreDescriptions} from "./StoreDescriptions";

export const MagazineStore: React.FC = () => {
    return (
        <Paper classes={{root: styles.root}} elevation={0}>
            <div className={styles.wrapper}>
                <div className={styles.description}>
                    Автолонг.ру — интернет-магазин комплектующих для грузовых автомобилей
                </div>
                <div>
                    <StoreDescriptions/>
                </div>

            </div>
        </Paper>
    )
}