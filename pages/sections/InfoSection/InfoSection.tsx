import React from "react";
import {Paper} from "@mui/material";
import styles from "./InfoSectoin.module.scss"
import {Button} from "@material-ui/core";
import Container from "../../../components/images/Container.png";
import Image from "next/image";

export const InfoSection: React.FC = () => {
    return (
        <Paper classes={{root: styles.root}} elevation={0}>
            <div className={styles.infoSection}>

                <div className={styles.text}>
                    ПРОДАВАЙТЕ БОЛЬШЕ И ЧАЩЕ
                </div>

                <div className={styles.first}>
                <span className={styles.textSecondary}>
                    С помощью нашей системы вы можете
                    <br/>продажи, включая розничные и оптовые
                </span>
                    <span className={styles.buttonBlue}>
                      ПОВЫСИТЬ
                    </span>

                </div>

                <Button
                    color="primary"
                    variant="contained"
                    className={styles.button}>
                    Присоединиться
                </Button>
                <div className={styles.container}>
                    <Image src={Container} alt={"Container"}/>
                </div>

            </div>
        </Paper>
    )
}