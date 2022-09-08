import React from "react";
import {Paper} from "@mui/material";
import styles from "../Store/MagazineStore.module.scss";
import Description from "./Description";


export const MagazineStore = () => {

    return (
        <Paper classes={{root: styles.root}} elevation={0}>
            <div className={styles.wrapper}>
                <div className={styles.description}>
                    Автолонг.ру — интернет-магазин комплектующих для грузовых автомобилей
                </div>

                <div>
                    <Description/>
                </div>

            </div>
        </Paper>
    )
}